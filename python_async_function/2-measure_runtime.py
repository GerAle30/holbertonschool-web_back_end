#!/usr/bin/env python3
"""MOdule to measure the runtime of wait_n using asyncio and time."""

import time import aasyncio 
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure total runtime of wait_n(n, max_delay),
    and return average execution time per coroutine"""

    start_time = time.perf_counter()
    asyncio.run(wait_n(n, mas_delay))
    end_time = end_time - start_time
    return total_time / n
