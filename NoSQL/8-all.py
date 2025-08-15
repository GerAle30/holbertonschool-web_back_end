#!/usr/bin/env python3
"""
Module that provides a function to list all document in a collection
"""


def list_all(mongo_collection):
    """
    List all document in a collection
    Args:
        mongo_collection: pymongo collection object

    Returns:
        List of document in the colleciton, empty list if no documents
    """
    documents = list(mongo_collection.find())
    return documents
