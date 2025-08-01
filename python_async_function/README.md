# Python Async Function

This project is part of the Holberton School curriculum, designed to introduce asynchronous programming in Python using `async`/`await` syntax and the `asyncio` module. You’ll learn how to write concurrent code that performs non-blocking operations efficiently.

## 📋 Table of Contents

- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Exercises](#exercises)
- [Usage Examples](#usage-examples)
- [Testing](#testing)
- [Key Concepts Covered](#key-concepts-covered)
- [Development Notes](#development-notes)

## 🔍 Overview

This project covers foundational concepts in asynchronous programming with Python. It explores coroutines, concurrency, tasks, and efficient runtime measurement using the `asyncio` library. Each exercise builds on these concepts, providing hands-on experience with real-world applications of asynchronous programming.

## 🧠 Learning Objectives

By the end of this project, you should be able to explain the following concepts clearly:

- ✅ `async` and `await` syntax in Python
- ✅ Executing asynchronous programs with `asyncio`
- ✅ Running concurrent coroutines and creating `asyncio` tasks
- ✅ Using the `random` module to simulate delay
- ✅ Managing concurrency using `asyncio.gather` and `create_task`

## 🛠️ Requirements

- Files must start with `#!/usr/bin/env python3`
- Files must be executable (`chmod +x filename.py`)
- Code must comply with `pycodestyle` (version 2.5.x)
- All functions and modules must have type annotations
- All modules and functions must include proper documentation
- Python version: 3.9+
- OS: Ubuntu 20.04 LTS

## 📁 Project Structure

```
python_async_function/
├── README.md
├── 0-basic_async_syntax.py      # Basic async coroutine
├── 0-main.py                    # Test file for exercise 0
├── 1-concurrent_coroutines.py   # Multiple coroutines execution
├── 1-main.py                    # Test file for exercise 1
├── 2-measure_runtime.py         # Runtime measurement
├── 2-main.py                    # Test file for exercise 2
├── 3-tasks.py                   # Using asyncio.Task
├── 3-main.py                    # Test file for exercise 3
└── 4-tasks.py                   # Multiple tasks execution
    └── 4-main.py                # Test file for exercise 4
```

## 📚 Exercises

### **Exercise 0: The basics of async**
- **File:** `0-basic_async_syntax.py`
- **Description:** Write an asynchronous coroutine `wait_random` that waits for a random delay.
  - Uses the `random` module to simulate delay.
  - Example:
    ```python
    asyncio.run(wait_random())     # Random delay 0-10 seconds
    asyncio.run(wait_random(5))    # Random delay 0-5 seconds
    ```

### **Exercise 1: Execute multiple coroutines**
- **File:** `1-concurrent_coroutines.py`
- **Description:** Write `wait_n` that spawns `wait_random` multiple times and returns delays in ascending order.

### **Exercise 2: Measure the runtime**
- **File:** `2-measure_runtime.py`
- **Description:** Create `measure_time` to calculate the average execution time of `wait_n`.

### **Exercise 3: Tasks**
- **File:** `3-tasks.py`
- **Description:** Write `task_wait_random` returning an `asyncio.Task` for `wait_random`.

### **Exercise 4: Task execution**
- **File:** `4-tasks.py`
- **Description:** Reimplement `wait_n` using `task_wait_random` for task management.

## 🚀 Usage Examples

### Basic Async Function

```bash
./0-main.py
# Example Output: Random float delays
```

### Concurrent Execution

```bash
./1-main.py
# Example Output: List of delays in ascending order
```

## 🧪 Testing

Each exercise comes with a test file (`*-main.py`). Ensure all files are executable:

```bash
chmod +x *.py
```

Run individual tests:

```bash
./0-main.py  # Test basic async syntax
./1-main.py  # Test concurrent coroutines
./2-main.py  # Test runtime measurement
./3-main.py  # Test tasks creation
./4-main.py  # Test task execution
```

## 📖 Key Concepts Covered

- **Coroutines**: Functions defined with `async def`
- **Awaiting**: Using `await` to pause execution until a coroutine completes
- **Concurrency**: Running multiple coroutines simultaneously with `asyncio.gather()`
- **Tasks**: Wrapping coroutines in `asyncio.Task` objects
- **Event Loop**: Managing and executing asynchronous operations
- **Type Annotations**: Proper typing for async functions

## 🔧 Development Notes

- All functions must include proper type annotations
- Documentation strings are required for all modules and functions
- Code must follow `pycodestyle` guidelines
- Use `asyncio.sleep()` for non-blocking delays
- Prefer `asyncio.gather()` for concurrent execution
- Use `asyncio.create_task()` for task management

---

**Project Category**: Web Backend Specialization  
**Author**: Alejandro  
**School**: Holberton School

