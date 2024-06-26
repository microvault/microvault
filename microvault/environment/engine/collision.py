from functools import lru_cache
from typing import List, Tuple

import numpy as np
from numba import njit

lru_cache(maxsize=5)


def range_seg_poly(segment: list, poly: list) -> Tuple[bool, float, float]:
    """
    Determines if a line segment intersects with a polygon and calculates the intersection point and range.

    Parameters:
    segment (list): The line segment defined by two points.
    poly (list): The polygon defined by a list of line segments.

    Returns:
    Tuple[bool, float, float]: A tuple containing:
    - bool: True if there is an intersection, False otherwise.
    - float: The intersection point.
    - float: The range.
    """
    inter = []

    for segments in poly:
        p = segment[0]
        r = segment[1] - segment[0]
        q = segments[0]
        s = segments[1] - segments[0]

        temp1 = cross_product(r, s)

        if temp1 != 0:
            direction_vec1 = q - p

            cross_product1 = cross_product(direction_vec1, s)
            if cross_product1 != 0:
                t = cross_product1 / cross_product(r, s)
            else:
                t = 1

            direction_vec2 = q - p

            cross_product2 = cross_product(direction_vec2, r)

            if cross_product2 != 0:
                u = cross_product2 / cross_product(r, s)
            else:
                u = 1

            if t >= 0 and t <= 1 and u >= 0 and u <= 1:
                int_point = p + t * r
                lrange = np.sqrt(np.sum((int_point - p) ** 2))
                inter.append([True, int_point, lrange])
    if inter:
        min_lrange_index = np.argmin([point[2] for point in inter])
        int_point = inter[min_lrange_index][1]
        lrange = round(inter[min_lrange_index][2], 3)
        int_point_rounded = [round(coord, 3) for coord in int_point]
        return True, tuple(int_point_rounded), lrange
    else:
        return False, 0.0, 0.0


@njit
def filter_segment(segs, x: float, y: float, max_range: int) -> List:
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

    for segment in segments_trans:
        x1, y1 = segment[0]
        x2, y2 = segment[1]
        segment_endpoints = np.array([[x1, y1], [x2, y2]])
        region_center = np.array([x, y])
        distances = np.sqrt(np.sum((segment_endpoints - region_center) ** 2, axis=1))

        if np.all(distances <= 6):
            segments_inside.append(segment)

    return segments_inside


@njit
def extract_segment(stack: List) -> List:
    """
    Extracts line segments from a stack of polygons.

    Parameters:
    stack (List): List of polygons, each represented by a list of points.

    Returns:
    List: List of line segments extracted from the polygons.
    """
    total_segments = []
    for polygon in stack:
        segments = []
        num_points = len(polygon)
        for i in range(num_points):
            current_point = polygon[i]
            next_point = polygon[(i + 1) % num_points]
            segment = (current_point, next_point)
            segments.append(segment)
        total_segments.extend(segments)

    all_obs = []
    for segment in total_segments:
        all_obs.append((segment[0][0], segment[0][1], segment[1][0], segment[1][1]))

    return all_obs


@njit(fastmath=True)
def cross_product(a: np.ndarray, b: np.ndarray) -> float:
    """
    Calculates the cross product of two 2D vectors.

    Parameters:
    a (np.ndarray): The first 2D vector.
    b (np.ndarray): The second 2D vector.

    Returns:
    float: The cross product of the two vectors.
    """
    return a[0] * b[1] - a[1] * b[0]


lru_cache(maxsize=5)


def lidar_intersections(
    robot_x: float,
    robot_y: float,
    lidar_range: int,
    lidar_angles: np.ndarray,
    segments: List,
) -> Tuple[List, List]:
    """
    Calculates the intersections and measurements of lidar rays with line segments.

    Parameters:
    robot_x (float): The x-coordinate of the robot's position.
    robot_y (float): The y-coordinate of the robot's position.
    lidar_range (int): The maximum range of the lidar sensor.
    lidar_angles (np.ndarray): Array of lidar angles.
    segments (List): List of line segments representing obstacles.

    Returns:
    Tuple[List, List]: A tuple containing two lists:
    - List: List of intersection points for each lidar ray.
    - List: List of measurements for each lidar ray.
    """
    intersections = []
    measurements = []
    for i, angle in enumerate(lidar_angles):
        lidar_segment = [
            (robot_x, robot_y),
            (
                robot_x + lidar_range * np.cos(angle),
                robot_y + lidar_range * np.sin(angle),
            ),
        ]

        lidar_segment_transformed = [np.array(segmento) for segmento in lidar_segment]

        intersected, int_point, lrange = range_seg_poly(
            lidar_segment_transformed, segments
        )

        if intersected:
            intersections.append(int_point)
            measurements.append(lrange)

        else:
            intersections.append(None)
            measurements.append(6.0)

    return intersections, measurements
