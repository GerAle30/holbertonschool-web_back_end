#!/usr/bin/env python3
"""Helper for pagination."""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Computes start and end slice indices for a given page.

    Args:
        page: 1-based page number (>= 1)
        page_size: number of items per page (>= 1)

    Returns:
        A tuple (start, end) where start is inclusive and end is exclusive
        
    Raises:
        ValueError: if page or page_size is less than 1.
    """
    if page < 1 or page_size < 1:
        raise ValueError("page and page_size must be >= 1")

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


if __name__ == "__main__":
    """Quick manual checks (won't run when imported by the checker)"""
    print(index_range(1, 10))
    print(index_range(2, 10))
    print(index_range(3, 5))
