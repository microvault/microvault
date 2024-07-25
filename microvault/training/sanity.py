from dataclasses import dataclass, field
from functools import singledispatchmethod

import torch
import torch.nn as nn

from microvault.training.params.output_spec import OutputSpec
from microvault.training.params.param_spec import ParamSpec


@dataclass
class Sanity:
    optimizer_to_spec: dict = field(default_factory=dict, init=False)
    tensor_to_optimizer: dict = field(default_factory=dict, init=False)
    active_optimizers: set = field(default_factory=set, init=False)
    active_optimizers: set = field(default_factory=set, init=False)
    module_to_spec: dict = field(default_factory=dict, init=False)
    active_modules: set = field(default_factory=set, init=False)

    @singledispatchmethod
    def _run_check(self, component):
        pass

    @_run_check.register
    def _(self, optimizer: torch.optim.Optimizer):
        def decorator(func):
            def inner(*args, **kwargs):
                output = func(*args, **kwargs)
                if optimizer in self.active_optimizers:
                    self.optimizer_to_spec[optimizer].validate()
                return output

            return inner

        return decorator

    @_run_check.register
    def _(self, module: nn.Module):
        def decorator(func):
            def inner(*args, **kwargs):
                output = func(*args, **kwargs)
                if module in self.active_modules:
                    self.module_to_spec[module].validate(output)
                return output

            return inner

        return decorator

    def register(self, optimizer):
        if optimizer in self.optimizer_to_spec:
            raise RuntimeError("The optimizer has already been registered.")
        self.optimizer_to_spec[optimizer] = ParamSpec()
        optimizer.step = self._run_check(optimizer)(optimizer.step)
        for param_group in optimizer.param_groups:
            for param in param_group["params"]:
                self.tensor_to_optimizer[param] = optimizer
        self.active_optimizers.add(optimizer)

    def add_module_changing_check(
        self,
        module,
        module_name=None,
    ):
        self._add_param_check(
            module,
            changing=True,
        )

    def _add_param_check(
        self, module, module_name=None, changing=None, check_nan=False, check_inf=False
    ):
        if not isinstance(module, nn.Module):
            raise RuntimeError(
                f"Module should be nn.Module type, but is {type(module)}."
            )

        for name, param in module.named_parameters():
            self.add_tensor(
                tensor=param,
                tensor_name=name,
                module_name=module_name,
                changing=changing,
                check_nan=check_nan,
                check_inf=check_inf,
            )

    def add_tensor(
        self,
        tensor,
        tensor_name,
        module_name=None,
        changing=None,
        check_nan=False,
        check_inf=False,
    ):
        optimizer = self.tensor_to_optimizer.get(tensor, None)
        if optimizer is None:
            raise RuntimeError(
                "The tensor doesn't belong to any optimizer. "
                "Please register its optimizer first."
            )
        self.optimizer_to_spec[optimizer].add(
            tensor=tensor,
            tensor_name=tensor_name,
            module_name=module_name,
            changing=changing,
            check_nan=check_nan,
            check_inf=check_inf,
        )

    def add_tensor_changing_check(
        self,
        tensor,
        tensor_name,
        module_name=None,
    ):
        self.add_tensor(
            tensor=tensor,
            tensor_name=tensor_name,
            module_name=module_name,
            changing=True,
        )

    def add_module_output_range_check(
        self,
        module,
        output_range,
        negate_range=False,
        module_name=None,
    ):
        self._add_output_check(
            module,
            output_range=output_range,
            negate_range=negate_range,
            module_name=module_name,
        )

    def _add_output_check(
        self,
        module,
        module_name=None,
        output_range=None,
        negate_range=False,
        check_nan=False,
        check_inf=False,
    ):
        if not isinstance(module, nn.Module):
            raise RuntimeError(
                f"Module should be nn.Module type, but is {type(module)}."
            )

        if module in self.module_to_spec:
            self.module_to_spec[module].update(
                module_name=module_name,
                range=output_range,
                negate=negate_range,
                check_nan=check_nan,
                check_inf=check_inf,
            )
        else:
            self.module_to_spec[module] = OutputSpec(
                module_name=module_name,
                range=output_range,
                negate=negate_range,
                check_nan=check_nan,
                check_inf=check_inf,
            )
            self.active_modules.add(module)
            module.forward = self._run_check(module)(module.forward)

    def add_module_unchanging_check(
        self,
        module,
        module_name=None,
    ):
        self._add_param_check(
            module,
            module_name=module_name,
            changing=False,
        )

    def add_tensor_unchanging_check(
        self,
        tensor,
        tensor_name,
        module_name=None,
    ):
        self.add_tensor(
            tensor=tensor,
            tensor_name=tensor_name,
            module_name=module_name,
            changing=False,
        )

    def add_module_nan_check(
        self,
        module,
        module_name=None,
    ):
        self.add_module(module, module_name=module_name, check_nan=True)

    def add_module(
        self,
        module,
        module_name=None,
        changing=None,
        output_range=None,
        negate_range=False,
        check_nan=False,
        check_inf=False,
    ):
        if (changing is not None) or check_nan or check_inf:
            self._add_param_check(
                module=module,
                module_name=module_name,
                changing=changing,
                check_nan=check_nan,
                check_inf=check_inf,
            )
        if (output_range is not None) or check_nan or check_inf:
            self._add_output_check(
                module=module,
                module_name=module_name,
                output_range=output_range,
                negate_range=negate_range,
                check_nan=check_nan,
                check_inf=check_inf,
            )

    def add_module_inf_check(
        self,
        module,
        module_name=None,
    ):
        self.add_module(module, module_name=module_name, check_inf=True)
