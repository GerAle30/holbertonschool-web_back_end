#!/usr/bin/env python3
"""
Module that defines task_wait_n function using task_wait_random.
"""

import asyncio
from typing import List
from importlib import import_module

# Import task_wait_random from the previous file
task_wait_random = import_module('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with the specified max_delay.

    Args:
        n (int): Number of tasks to spawn
        max_delay (int): Maximum delay for each task

    Returns:
        List[float]: List of all delays in ascending order
    """
    # Create n tasks using task_wait_random
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Execute all tasks concurrently and collect results
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
