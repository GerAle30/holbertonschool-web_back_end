#!/usr/bin/env python3
"""
This module defines a function that returns a 
multiplier function.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by a multiplier.

    Args:
        multiplier (float): The multiplier value.

    Returns:
        Callable[[float], float]: A function that multiplies input by multiplier.
    """
    return lambda x: x * multiplier
