from functools import lru_cache
from typing import List, Tuple

import numpy as np
from numba import njit

RED_BOLD = "\033[1;31m"
RESET = "\033[0m"


class Collision:

    def filter_segments(self, segs: List, x: float, y: float, max_range: int):
        try:
            return filter_list_segment(segs, x, y, max_range)
        except Exception as e:
            print(f"{RED_BOLD}Error in filter_segment: {e}{RESET}")
            raise

    def extract_seg_from_polygon(self, stack: List) -> List:
        try:
            return extract_segment_from_polygon(stack)
        except Exception as e:
            print(f"{RED_BOLD}Error in extract_segment_from_polygon: {e}{RESET}")
            raise

    def lidar_intersection(
        self,
        robot_x: float,
        robot_y: float,
        lidar_range: int,
        lidar_angles: np.ndarray,
        segments: List,
    ):
        try:
            return lidar_intersections(
                robot_x, robot_y, lidar_range, lidar_angles, segments
            )
        except Exception as e:
            print(f"{RED_BOLD}Error in lidar_intersection: {e}{RESET}")
            raise

    def lidar_measurement(
        self,
        robot_x: float,
        robot_y: float,
        lidar_range: int,
        lidar_angles: np.ndarray,
        segments: List,
    ):
        try:
            return lidar_measurements(
                robot_x, robot_y, lidar_range, lidar_angles, segments
            )
        except Exception as e:
            print(f"{RED_BOLD}Error in lidar_measurement: {e}{RESET}")
            raise


@njit
def filter_list_segment(segs: List, x: float, y: float, max_range: int) -> List:
    """
    Filters line segments based on proximity to a given point.

    Parameters:
    segs (list): List of line segments.
    x (float): X-coordinate of the point.
    y (float): Y-coordinate of the point.
    max_range (int): Maximum range for filtering segments.

    Returns:
    List: List of line segments filtered based on proximity to the given point.
    """
    segments_trans = [
        [np.array(segments[:2]), np.array(segments[2:])] for segments in segs
    ]

    segments_inside = []
    region_center = np.array([x, y])

    for segment in segments_trans:
        x1, y1 = segment[0]
        x2, y2 = segment[1]
        segment_endpoints = np.array([[x1, y1], [x2, y2]])

        distances = calculate_distances(segment_endpoints, region_center)

        if is_distance_within_range(distances, max_range):
            segments_inside.append(segment)

    return segments_inside


@njit
def is_distance_within_range(distance: np.ndarray, lidar_range: int) -> bool:
    """
    Determines if a distance is within the range of the lidar sensor.

    Parameters:
    distance (float): The distance to be checked.
    lidar_range (int): The maximum range of the lidar sensor.

    Returns:
    bool: True if the distance is within the range, False otherwise.
    """

    return np.all(distance <= lidar_range)


@njit
def calculate_distances(seg_ends: np.ndarray, center: np.ndarray) -> np.ndarray:
    """
    Calculates the distances from the endpoints of line segments to a given central point.

    Parameters:
    segment_endpoints (np.ndarray): Array of line segment endpoints. Each row represents a point.
    region_center (np.ndarray): Coordinates of the central point.

    Returns:
    np.ndarray: Array of distances from each endpoint to the central point.
    """

    distances = np.sqrt(np.sum((seg_ends - center) ** 2, axis=1))

    return distances


@njit
def extract_segment_from_polygon(stack: List) -> List:
    """
    Extracts line segments from a stack of polygons.

    Parameters:
    stack (List): List of polygons, each represented by a list of points.

    Returns:
    List: List of line segments extracted from the polygons.
    """

    assert len(stack) >= 1, "Stack must have at least 1 polygon."

    total_segments = []
    for polygon in stack:
        segments = connect_polygon_points(polygon)
        total_segments.extend(segments)

    return convert_to_line_segments(total_segments)


@njit
def convert_to_line_segments(total_segments: List) -> List:
    """
    Converts a list of line segments into formed (x1, y1, x2, y2) representing start point, end point

    Parameters:
    total_segments (List): List of line segments.

    Returns:
    List: List of line segments converted into (x1, y1, x2, y2) format.
    """

    assert len(total_segments) >= 3, "Polygon must have at least 3 points."

    line_segments = []
    for segment in total_segments:
        line_segments.append(
            (segment[0][0], segment[0][1], segment[1][0], segment[1][1])
        )

    return line_segments


@njit
def connect_polygon_points(polygon: np.ndarray) -> List:
    """
    Connects the points of a polygon to form line segments.

    Parameters:
    polygon (np.ndarray): The polygon represented by a list of points.

    Returns:
    List: List of line segments connecting the points of the polygon.
    """

    #                segment 1
    # (point 1) +-----------------+ (point 2)
    #           |                 |
    # segment 4 |                 | segment 2
    #           |                 |
    # (point 4) +-----------------+ (point 3)
    #                segment 3

    assert len(polygon) >= 3, "Polygon must have at least 3 points."

    num_points = len(polygon)
    segments = []
    for i in range(num_points):
        current_point = polygon[i]
        # wrap-around to close the polygon
        next_point = polygon[(i + 1) % num_points]
        segment = (current_point, next_point)
        segments.append(segment)

    return segments


lru_cache(maxsize=5)


def intersect_segment_with_polygon(segment: list, poly: list) -> List:
    """
    Intersects a line segment with a polygon.

    Parameters:
    segment (list): Line segment represented by two points.
    poly (list): List of line segments representing a polygon.

    Returns:
    List: List of intersection points with p, t, r
    """

    # (q+s)  (p+r)
    #   *     *
    #    \   /
    #     \ /
    #      *  temp
    #     / \
    #    /   \
    #   /     \
    #  *       *
    # (p)      (q)

    inter = []

    for segments in poly:
        p = segment[0]
        r = segment[1] - segment[0]
        q = segments[0]
        s = segments[1] - segments[0]

        temp = cross_product_2d_vector(r, s)

        # If temp is 0, the lines are parallel (//)
        if temp != 0:
            direction_vec = q - p

            t, u = calculate_temp_vector(direction_vec, r, s)

            # If t and u are between 0 and 1
            if t >= 0 and t <= 1 and u >= 0 and u <= 1:
                interception_point = calculate_intersection_point_vec(p, t, r)
                distances = calculate_distance_to_intersection(interception_point, p)
                inter.append([True, interception_point, distances])

    return inter


@njit
def calculate_intersection_point_vec(p: float, t: float, r: float) -> float:
    """
    Calculates the intersection point of two line segments.

    Parameters:
    p (float): The starting point.
    t (float): The t value.
    r (float): The direction vector.

    Returns:
    float: The intersection point.
    """
    return p + t * r


@njit
def calculate_distance_to_intersection(inter_point: np.ndarray, p: np.ndarray) -> float:
    """
    Calculates the distance to the intersection point.

    Parameters:
    inter_point (np.ndarray): The intersection point.
    p (np.ndarray): The starting point.

    Returns:
    float: The distance to the intersection point.
    """
    return np.sqrt(np.sum((inter_point - p) ** 2))


@njit
def calculate_temp_vector(
    direction_vec: np.ndarray, r: np.ndarray, s: np.ndarray
) -> Tuple[float, float]:
    """
    Calculates the t and u values for the intersection of two line segments.

    Parameters:
    vector_direction (np.ndarray): The direction vector.
    vector_r (np.ndarray): The vector r.
    vector_s (np.ndarray): The vector s.

    Returns:
    Tuple[float, float]: The t and u values.
    """
    cross_product = cross_product_2d_vector(r, s)

    cross_product_direction_vec_s = cross_product_2d_vector(direction_vec, s)
    cross_product_direction_vec_r = cross_product_2d_vector(direction_vec, r)

    # If cross_product is not 0, calculate t and u
    if cross_product != 0:
        t = cross_product_direction_vec_s / cross_product
        u = cross_product_direction_vec_r / cross_product
    else:
        t = u = 1

    return t, u


# TODO: refactor
lru_cache(maxsize=5)


def lidar_intersections(
    robot_x: float,
    robot_y: float,
    lidar_range: int,
    lidar_angles: np.ndarray,
    segments: List,
):

    intersections = []
    for i, angle in enumerate(lidar_angles):
        lidar_segment = lidar_to_segment(robot_x, robot_y, lidar_range, angle)

        lidar_segment_transformed = [np.array(segmento) for segmento in lidar_segment]

        intersected = intersect_segment_with_polygon(
            lidar_segment_transformed, segments
        )

        if intersected:
            intercept, position = position_intersection(intersected)

            if intercept:
                intersections.append(position)

            else:
                intersections.append((0.0, 0.0))

        else:
            intersections.append((0.0, 0.0))
            continue

    return intersections


# TODO: Add (njit, docstring)
def position_intersection(
    intersection: List[Tuple[bool, np.ndarray, float]]
) -> Tuple[bool, Tuple]:

    min_lrange_index = np.argmin([point[2] for point in intersection])
    inter_point = intersection[min_lrange_index][1]
    inter_point_rounded = [round(coord, 3) for coord in inter_point]

    return True, tuple(inter_point_rounded)


# TODO: refactor
def lidar_measurements(
    robot_x: float,
    robot_y: float,
    lidar_range: int,
    lidar_angles: np.ndarray,
    segments: List,
):

    measurements = []
    for i, angle in enumerate(lidar_angles):
        lidar_segment = lidar_to_segment(robot_x, robot_y, lidar_range, angle)
        lidar_segment_transformed = [np.array(segmento) for segmento in lidar_segment]

        intersected = intersect_segment_with_polygon(
            lidar_segment_transformed, segments
        )

        if intersected:
            intercept, ranges = measurements_intersection(intersected)

            if intercept:
                measurements.append(ranges)

            else:
                measurements.append(0.0)
        else:
            measurements.append(0.0)
            continue

    return measurements


# TODO: Add (njit, docstring)
def measurements_intersection(intersection: List) -> Tuple[bool, float]:

    min_lrange_index = np.argmin([point[2] for point in intersection])
    lrange = round(intersection[min_lrange_index][2], 3)

    return True, lrange


@njit
def lidar_to_segment(
    robot_x: float, robot_y: float, lidar_range: int, angle: float
) -> List[Tuple[float, float]]:
    return [
        (robot_x, robot_y),
        (robot_x + lidar_range * np.cos(angle), robot_y + lidar_range * np.sin(angle)),
    ]


@njit(fastmath=True)
def cross_product_2d_vector(a: np.ndarray, b: np.ndarray) -> float:
    """
    Calculates the cross product of two 2D vectors.

    Parameters:
    a (np.ndarray): The first 2D vector.
    b (np.ndarray): The second 2D vector.

    Returns:
    float: The cross product of the two vectors.
    """

    assert a.shape == b.shape, "Vectors must have the same shape in 2D cross product."
    assert a.shape[0] == 2, "Vectors must be 2D for cross product."
    return a[0] * b[1] - a[1] * b[0]
