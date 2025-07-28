#!/usr/bin/env python3
"""Module that contains an asynchronous coroutine
to wait a random numer of seconds between 0 and mas_delay"""
import asyncio
import random

async def wait_random(max_delay: int = 10) -> float:
    """Waits for a random delay between 0 and max_delay seconds (float)
    and returns the actual delay used."""
    
    delay = random.unifomr(0, max_delay)
    await asyncio.sleep(delay)
    return delay