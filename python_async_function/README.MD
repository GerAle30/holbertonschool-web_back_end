# 📦 Python Async Function

This project is part of the Holberton School curriculum, designed to introduce asynchronous programming in Python using `async`/`await` syntax and the `asyncio` module. You’ll learn how to write concurrent code that performs non-blocking operations efficiently.

---

## 🧠 Learning Objectives

At the end of this project, you should be able to explain the following concepts clearly:

- ✅ `async` and `await` syntax in Python
- ✅ How to execute asynchronous programs with `asyncio`
- ✅ Running concurrent coroutines and creating `asyncio` tasks
- ✅ Using the `random` module to simulate delay
- ✅ Managing concurrency using `asyncio.gather` and `create_task`

---

## 🛠️ Requirements

- Files must start with `#!/usr/bin/env python3`
- Files must be executable (`chmod +x filename.py`)
- Code must comply with `pycodestyle` (version 2.5.x)
- All functions and modules must have type annotations
- All modules and functions must include proper documentation
- Python version: 3.9+
- OS: Ubuntu 20.04 LTS

---

## 📁 Project Structure

```
python_async_function/
├── README.MD
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

---

## 📚 Exercises

### **Exercise 0: The basics of async** ✅
**File:** `0-basic_async_syntax.py`

Write an asynchronous coroutine that takes an integer argument (`max_delay`, default 10) named `wait_random` that:
- Waits for a random delay between 0 and `max_delay` (float value) seconds
- Returns the actual delay used
- Uses the `random` module

**Example:**
```python
print(asyncio.run(wait_random()))     # Random delay 0-10 seconds
print(asyncio.run(wait_random(5)))    # Random delay 0-5 seconds
print(asyncio.run(wait_random(15)))   # Random delay 0-15 seconds
```

### **Exercise 1: Let's execute multiple coroutines at the same time with async**
**File:** `1-concurrent_coroutines.py`

Write an async routine called `wait_n` that takes two int arguments:
- `n`: number of times to spawn `wait_random`
- `max_delay`: maximum delay for each `wait_random` call
- Returns list of all delays in ascending order

### **Exercise 2: Measure the runtime**
**File:** `2-measure_runtime.py`

Create a `measure_time` function that measures the total execution time for `wait_n(n, max_delay)` and returns the average time per operation.

### **Exercise 3: Tasks**
**File:** `3-tasks.py`

Write a function `task_wait_random` that takes an integer `max_delay` and returns an `asyncio.Task`.

### **Exercise 4: Tasks**
**File:** `4-tasks.py`

Take the code from `wait_n` and alter it into a new function `task_wait_n` that calls `task_wait_random`.

---

## 🚀 Usage Examples

### Basic Async Function
```bash
./0-main.py
# Output: Random float delays
# 9.034261504534394
# 1.6216525464615306
# 10.634589756751769
```

### Concurrent Execution
```bash
./1-main.py
# Output: List of delays in ascending order
# [0.123, 1.456, 2.789, 4.567, 8.901]
```

---

## 🧪 Testing

Each exercise comes with a test file (`*-main.py`). Make sure all files are executable:

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

---

## 📖 Key Concepts Covered

- **Coroutines**: Functions defined with `async def`
- **Awaiting**: Using `await` to pause execution until coroutine completes
- **Concurrency**: Running multiple coroutines simultaneously with `asyncio.gather()`
- **Tasks**: Wrapping coroutines in `asyncio.Task` objects
- **Event Loop**: Managing and executing asynchronous operations
- **Type Annotations**: Proper typing for async functions

---

## 🔧 Development Notes

- All functions must include proper type annotations
- Documentation strings are required for all modules and functions
- Code must follow `pycodestyle` guidelines
- Use `asyncio.sleep()` for non-blocking delays
- Prefer `asyncio.gather()` for concurrent execution
- Use `asyncio.create_task()` for task management

---

*This project is part of the Holberton School Web Backend specialization curriculum.*
