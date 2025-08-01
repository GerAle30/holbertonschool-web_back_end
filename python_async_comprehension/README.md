# Python Async Comprehension

A comprehensive Python project demonstrating asynchronous programming concepts, including async generators, async comprehensions, and parallel execution measurement.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Performance Analysis](#performance-analysis)
- [Learning Objectives](#learning-objectives)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

This project explores advanced Python asynchronous programming concepts, specifically focusing on:

- **Async Generators**: Creating generators that can yield values asynchronously
- **Async Comprehensions**: Using comprehension syntax with asynchronous iterators
- **Parallel Execution**: Measuring performance improvements through concurrent execution
- **Runtime Analysis**: Understanding the benefits of asynchronous programming

## ✨ Features

- 🔄 **Async Generator**: Generates random floating-point numbers with simulated I/O delays
- 📊 **Async Comprehension**: Collects data using async comprehension syntax
- ⏱️ **Runtime Measurement**: Measures execution time for parallel async operations
- 🚀 **Performance Optimization**: Demonstrates the power of concurrent execution

## 📋 Requirements

- **Python**: 3.7+ (for async/await syntax support)
- **Operating System**: Linux/macOS/Windows
- **Memory**: Minimal (< 10MB)

### Python Dependencies

This project uses only Python standard library modules:
- `asyncio` - For asynchronous I/O operations
- `random` - For generating random numbers
- `time` - For runtime measurement
- `typing` - For type hints

## 🚀 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd python_async_comprehension
   ```

2. **Verify Python version**:
   ```bash
   python3 --version  # Should be 3.7+
   ```

3. **No additional dependencies required** - uses Python standard library only.

## 💻 Usage

### Running Individual Components

#### 1. Async Generator Demo
```bash
python3 0-main.py
```
**Expected Output**: A list of 10 random floating-point numbers (takes ~10 seconds)

#### 2. Async Comprehension Demo
```bash
python3 1-main.py
```
**Expected Output**: A list of 10 random floating-point numbers collected via async comprehension

#### 3. Runtime Measurement Demo
```bash
python3 2-main.py
```
**Expected Output**: Runtime measurement for parallel execution (~10 seconds instead of ~40)

### Using as a Module

```python
import asyncio
from async_generator import async_generator
from async_comprehension import async_comprehension
from measure_runtime import measure_runtime

async def main():
    # Use async generator
    numbers = []
    async for num in async_generator():
        numbers.append(num)
    print(f"Generated numbers: {numbers}")
    
    # Use async comprehension
    comprehension_result = await async_comprehension()
    print(f"Comprehension result: {comprehension_result}")
    
    # Measure parallel runtime
    runtime = await measure_runtime()
    print(f"Parallel execution time: {runtime:.2f} seconds")

asyncio.run(main())
```

## 📁 Project Structure

```
python_async_comprehension/
├── README.md                   # This file
├── 0-async_generator.py        # Async generator implementation
├── 0-main.py                   # Test script for async generator
├── 1-async_comprehension.py    # Async comprehension implementation
├── 1-main.py                   # Test script for async comprehension
├── 2-measure_runtime.py        # Runtime measurement implementation
├── 2-main.py                   # Test script for runtime measurement
└── __pycache__/               # Python bytecode cache
```

### File Descriptions

| File | Purpose | Key Features |
|------|---------|--------------|
| `0-async_generator.py` | Async generator that yields random numbers | `AsyncGenerator[float, None]`, simulated I/O delay |
| `1-async_comprehension.py` | Collects numbers using async comprehension | List comprehension with `async for` |
| `2-measure_runtime.py` | Measures parallel execution performance | Uses `asyncio.gather()` for concurrency |

## 📊 Examples

### Example 1: Basic Async Generator Usage

```python
#!/usr/bin/env python3
import asyncio
from async_generator import async_generator

async def demo():
    print("Generating numbers asynchronously...")
    async for number in async_generator():
        print(f"Generated: {number:.2f}")

asyncio.run(demo())
```

### Example 2: Performance Comparison

```python
#!/usr/bin/env python3
import asyncio
import time

async def sequential_execution():
    """Run async_comprehension 4 times sequentially"""
    start = time.time()
    for _ in range(4):
        await async_comprehension()
    return time.time() - start

async def parallel_execution():
    """Run async_comprehension 4 times in parallel"""
    return await measure_runtime()

# Compare performance
sequential_time = asyncio.run(sequential_execution())  # ~40 seconds
parallel_time = asyncio.run(parallel_execution())     # ~10 seconds

print(f"Sequential: {sequential_time:.2f}s")
print(f"Parallel: {parallel_time:.2f}s")
print(f"Speedup: {sequential_time/parallel_time:.1f}x")
```

## 📈 Performance Analysis

### Runtime Comparison

| Execution Method | Expected Time | Explanation |
|------------------|---------------|-------------|
| **Sequential** | ~40 seconds | Each comprehension waits for the previous to complete |
| **Parallel** | ~10 seconds | All comprehensions run concurrently |
| **Speedup** | ~4x | Near-linear speedup due to I/O-bound operations |

### Why Async Comprehension?

1. **Readability**: More concise than traditional async iteration
2. **Performance**: Enables easy parallel execution
3. **Memory Efficiency**: Lazy evaluation when possible
4. **Pythonic**: Familiar comprehension syntax with async benefits

## 🎯 Learning Objectives

By working with this project, you will understand:

- ✅ **Async Generators**: How to create and use asynchronous generators
- ✅ **Async Comprehensions**: Syntax and usage of async list comprehensions  
- ✅ **Concurrency**: Parallel execution using `asyncio.gather()`
- ✅ **Performance Measurement**: Timing and analyzing async operations
- ✅ **Type Hints**: Proper typing for async functions and generators
- ✅ **I/O Bound Optimization**: When and why async programming provides benefits

## 🧪 Testing

Run all tests to verify functionality:

```bash
# Test all components
python3 0-main.py && echo "✅ Async generator works"
python3 1-main.py && echo "✅ Async comprehension works" 
python3 2-main.py && echo "✅ Runtime measurement works"
```

### Expected Behavior

- **0-main.py**: Should print 10 random numbers after ~10 seconds
- **1-main.py**: Should print 10 random numbers after ~10 seconds
- **2-main.py**: Should print a runtime value close to 10 seconds (not 40)

## 🤝 Contributing

This is an educational project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Additional Resources

- [Python Async/Await Documentation](https://docs.python.org/3/library/asyncio.html)
- [PEP 530 - Asynchronous Comprehensions](https://pep.python.org/pep-0530/)
- [PEP 525 - Asynchronous Generators](https://pep.python.org/pep-0525/)
- [Real Python - Async IO in Python](https://realpython.com/async-io-python/)

## 📄 License

This project is part of the Holberton School curriculum and is intended for educational purposes.

---

**Author**: Alejandro  
**School**: Holberton School  
**Project**: Python - Async Comprehension  
**Category**: Back-end Development
