#!/usr/bin/env python3
"""
Module that defines task_wait_random function to create asyncio.Task.
"""

import asyncio
from importlib import import_module

# Import wait_random from the 0-basic_async_syntax file
wait_random = import_module('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create and return an asyncio.Task for wait_random coroutine.

    Args:
        max_delay (int): Maximum delay for the wait_random coroutine

    Returns:
        asyncio.Task: A task that wraps the wait_random coroutine
    """
    return asyncio.create_task(wait_random(max_delay))
