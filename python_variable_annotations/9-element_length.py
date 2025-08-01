#!/usr/bin/env python3
"""
This module defines a function that returns a list of tuples
containing elements and their lengths.
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples with each element and its length.

    Args:
        lst (Iterable[Sequence]): A sequence of iterable items.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples with item and its length.
    """
    return [(i, len(i)) for i in lst]
