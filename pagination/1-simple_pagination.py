#!/usr/bin/env python3
"""Simple pagination over a CSV dataset
Implements:
    - index_range(page, page_size) to compute slice indices
    - Server.get_page(page, page_size) to return a page of rows
"""

import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Compute start and end (exclusive) indices for a given page

    Args:
        page: 1-based page number (>= 1)
        page_size: number of items per page (>= 1)

    Returns:
        A tuple (start, end) suitable for slicing
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE, encoding="utf-8") as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a page of the dataset using page & page_size.

        Args:
            page: 1-based page number (must be int >= 1)
            page_size: items per page (must be int >= 1)

        Returns:
            List[List]: A page of data, or empty list if out of range

        Raises:
            AssertionError: if page/page_size are not ints or < 1
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()
        start, end = index_range(page, page_size)

        if start >= len(data):
            return []
        return data[start:end]
