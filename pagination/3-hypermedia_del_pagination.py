#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict, Any, Optional


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        self.__dataset: Optional[List[List[str]]] = None
        # Mantenemos dict con posibles "huecos" tras borrados
        self.__indexed_dataset: Optional[Dict[int, List[str]]] = None

    def dataset(self) -> List[List[str]]:
        """Cached dataset (list of rows without header)."""
        if self.__dataset is None:
            with open(self.DATA_FILE, encoding="utf-8") as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # drop header
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List[str]]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            data = self.dataset()
            # Indexa TODO el dataset (0..len(data)-1)
            self.__indexed_dataset = {i: row for i, row in enumerate(data)}
        return self.__indexed_dataset

    def get_hyper_index(self, index: Optional[int] = None,
                        page_size: int = 10) -> Dict[str, Any]:
        """Deletion-resilient page starting at `index`.

        Returns:
            {
              "index": int,        # índice solicitado (start)
              "data": List[List],  # filas devueltas, saltando huecos
              "page_size": int,    # tamaño real devuelto (<= page_size)
              "next_index": int    # primer índice después del último ítem
            }
        """
        if index is None:
            index = 0

        # Validaciones según enunciado
        assert isinstance(index, int), "index must be an int"
        assert isinstance(page_size, int) and page_size > 0, \
            "page_size must be an int > 0"

        idx_map = self.indexed_dataset()
        upper_bound = len(idx_map)          # rango original indexado
        assert 0 <= index < upper_bound, "index out of range"

        data: List[List[str]] = []
        cursor = index

        # Recolecta hasta page_size elementos existentes, saltando borrados
        while len(data) < page_size and cursor < upper_bound:
            if cursor in idx_map:
                data.append(idx_map[cursor])
            cursor += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": cursor,
        }

