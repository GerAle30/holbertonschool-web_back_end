#!/usr/bin/env python3
"""
Module that provides a function to find schools by topic
"""


def school_by_topics(mongo_collection, topic):
    """
    Returns the list of school having a specific topic
    Args:
        mongo_collection: pymongo collection object
        topic (string): topic searched
    Returns:
        List of school that have the specified topic
    """
    schools = list(mongo_collection.find({"topics": topic}))
    return schools
