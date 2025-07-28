#!/usr/bin/env python3
"""
This module defines a function that returns a tuple from a string and a number.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple of a string and the square of the number.

    Args:
        k (str): A string.
        v (Union[int, float]): An integer or float.

    Returns:
        Tuple[str, float]: Tuple containing the string and the square of v.
    """
    return (k, float(v ** 2))
