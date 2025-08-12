#!/usr/bin/env python3
"""Hypermedia pagination over a CSV dataset

Implements:
    - index_range(page, page_size) to compute slice indices.
    - Server.get_page(page, page_size) to return a page of rows.
    - Server.get_hyper(page, page_size) to return data plus hypermedia meta
"""

import csv
import math
from typing import Any, Dict, List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Compute start and end (exclusive) indices for a given page

    Args:
        page: 1-based page number (>= 1).

    Returns:
        A tuple (start, end) suitable for slicing
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names
    """
    DATA_FILE = "Popular_Baby_names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE, encoding="UTF-8") as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a page of the dataset using page & page_size

        Args:
            page: 1-based page number (must be int >= 1)
            page_size: items per page (must be int >= 1)

        Returns:
            A list of rows (List[List]) for the requested page
            Returns and empty list if the range is out of bounds
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

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """Return a hypermedia-style pagination payload.

        The payload includes:
            page_size: length of the returned page (may be 0)
            page: the current page number
            data: the page data (same as get_page)
            next_page: next page number, or None if none
            total_pages: total number of pages (ceil division)
        """
        # Validate inputs (same rules as get_page)
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size) if total_items else 0
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
