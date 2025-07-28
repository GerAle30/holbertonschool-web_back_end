#!/usr/bin/env python3
"""
This module defines a function that sums a list of integers and floats.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of a list containing integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): List of numbers.

    Returns:
        float: The sum as a float.
    """
    return sum(mxd_lst)

