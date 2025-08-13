#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination.
"""

import csv
from typing import Dict, List, Any


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        self.__dataset: List[List[str]] | None = None
        self.__indexed_dataset: Dict[int, List[str]] | None = None

    def dataset(self) -> List[List[str]]:
        """Cached dataset (list file, no header)"""
        if self.__dataset is None:
            with open(self.DATA_FILE, encoding="utf-8") as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List[str]]:
        """Dataset indexed by sorting position, starting at 0"""
        if self.__indexed_dataset is None:
            data = self.dataset()
            self.__indexed_dataset = {
                i: data[i] for i in range(len(data))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None,
                        page_size: int = 10) -> Dict[str, Any]:
        """Return a page of the dataset indexed by deletion-resilient index.

        Args:
            index: start index of the return page
            page_size: the current page size

        Returns:
            Dictionary with pagination metadata and data
        """
        assert isinstance(page_size, int) and page_size > 0

        indexed = self.indexed_dataset()
        max_len = len(indexed)
        start = 0 if index is None else index

        assert isinstance(start, int) and 0 <= start < max_len

        data: List[List[str]] = []
        cursor = start

        while len(data) < page_size and cursor < max_len:
            if cursor in indexed:
                data.append(indexed[cursor])
            cursor += 1

        next_index = cursor

        return {
            'index': start,
            'data': data,
            'page_size': len(data),
            'next_index': next_index,
        }
