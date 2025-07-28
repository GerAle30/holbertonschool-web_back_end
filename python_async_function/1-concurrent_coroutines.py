#!/usr/bin/env python3
"""
Module that contains the asynchronous routine wait_n
which executes multiple wait_random coroutines concurrently.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay, returning
    a sorted list of delays in ascending order.

    Args:
        n (int): Number of times to spawn wait_random
        max_delay (int): Maximum delay for each wait_random call

    Returns:
        List[float]: List of all delays in ascending order
    """
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    sorted_delays = []

    for delay in delays:
        for i, sorted_delay in enumerate(sorted_delays):
            if delay < sorted_delay:
                sorted_delays.insert(i, delay)
                break
        else:
            sorted_delays.append(delay)

    return sorted_delays
