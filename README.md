# Holberton School Web Backend

This repository contains a collection of projects from the Holberton School Web Backend curriculum. It covers various advanced programming techniques, including asynchronous programming and type annotations in Python.

## 📋 Table of Contents

- [Projects Overview](#projects-overview)
- [General Structure](#general-structure)
- [Projects](#projects)
  - [Python Async Comprehension](#python-async-comprehension)
  - [Python Async Function](#python-async-function)
  - [Python Variable Annotations](#python-variable-annotations)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Contribution Guidelines](#contribution-guidelines)

## 🔍 Projects Overview

This repository features three main projects, each focusing on different aspects of backend development:

1. **Python Async Comprehension**: Implements async generator functions, async comprehensions, and performance measurement through concurrency.
2. **Python Async Function**: Introduces basic asynchronous programming concepts including coroutines, tasks, and concurrent execution.
3. **Python Variable Annotations**: Explores type annotations, enriching code readability and maintainability.

## 📁 General Structure

```
holbertonschool-web_back_end/
├── python_async_comprehension/
│   ├── 0-async_generator.py
│   ├── 1-async_comprehension.py
│   ├── 2-measure_runtime.py
│   └── README.md
├── python_async_function/
│   ├── 0-basic_async_syntax.py
│   ├── 1-concurrent_coroutines.py
│   ├── 2-measure_runtime.py
│   ├── 3-tasks.py
│   ├── 4-tasks.py
│   └── README.md
├── python_variable_annotations/
│   ├── 0-add.py
│   ├── 1-concat.py
│   ├── 2-floor.py
│   ├── ...
│   └── README.md
└── README.md (this file)
```

## 📚 Projects

### 🔄 Python Async Comprehension

**Focus**: Advanced asynchronous programming with generators and comprehensions

- **Key Features**:
  - Async generators that yield random values with delays
  - Async comprehensions for elegant data collection
  - Performance measurement of parallel vs sequential execution
  - Demonstrates ~4x performance improvement through concurrency

- **Skills Learned**:
  - `AsyncGenerator[float, None]` type annotations
  - `async for` syntax in comprehensions
  - `asyncio.gather()` for parallel execution
  - Runtime analysis and optimization

- **Location**: [`/python_async_comprehension`](./python_async_comprehension)

### ⚡ Python Async Function

**Focus**: Fundamentals of asynchronous programming in Python

- **Key Features**:
  - Basic async/await syntax
  - Concurrent coroutine execution
  - Task creation and management
  - Runtime measurement and analysis

- **Skills Learned**:
  - Writing asynchronous coroutines
  - Using `asyncio.gather()` for concurrency
  - Creating and managing `asyncio.Task` objects
  - Performance comparison between sequential and parallel execution

- **Location**: [`/python_async_function`](./python_async_function)

### 🏷️ Python Variable Annotations

**Focus**: Type safety and code documentation through type annotations

- **Key Features**:
  - Function parameter and return type annotations
  - Variable type annotations
  - Complex type definitions using `typing` module
  - Duck typing concepts

- **Skills Learned**:
  - Basic type annotations (`int`, `str`, `float`)
  - Complex types (`List`, `Tuple`, `Union`, `Callable`)
  - Generic types and type variables
  - Static type checking with `mypy`

- **Location**: [`/python_variable_annotations`](./python_variable_annotations)

## 🛠️ Technologies Used

| Technology | Purpose | Projects Used In |
|------------|---------|------------------|
| **Python 3.9+** | Main programming language | All projects |
| **asyncio** | Asynchronous I/O operations | Async projects |
| **typing** | Type annotations and hints | All projects |
| **random** | Random number generation | Async projects |
| **time** | Performance measurement | Async projects |
| **mypy** | Static type checking | Variable annotations |

## 🚀 How to Use

### Prerequisites

- Python 3.9 or higher
- Ubuntu 20.04 LTS (recommended)
- Basic understanding of Python programming

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/holbertonschool-web_back_end.git
   cd holbertonschool-web_back_end
   ```

2. **Navigate to a specific project**:
   ```bash
   cd python_async_function
   ```

3. **Make scripts executable**:
   ```bash
   chmod +x *.py
   ```

4. **Run test files**:
   ```bash
   ./0-main.py
   ./1-main.py
   # ... etc
   ```

### Project-Specific Instructions

Each project directory contains:
- **README.md**: Detailed project documentation
- **Main files** (`0-main.py`, `1-main.py`, etc.): Test scripts
- **Implementation files**: The actual project code

## 📈 Learning Path

**Recommended Order**:

1. **Start with Python Variable Annotations** - Build foundation in type safety
2. **Move to Python Async Function** - Learn basic async programming
3. **Finish with Python Async Comprehension** - Master advanced async concepts

This progression ensures you understand type annotations before diving into async programming, then builds complexity gradually.

## 🧪 Testing

Each project includes comprehensive test files:

```bash
# Test all projects
for dir in python_*/; do
    echo "Testing $dir"
    cd "$dir"
    chmod +x *.py
    for main in *-main.py; do
        echo "Running $main"
        ./$main
    done
    cd ..
done
```

## 📊 Performance Insights

### Async Performance Benefits

| Execution Type | Time (4 operations) | Speedup |
|----------------|--------------------|---------|
| Sequential | ~40 seconds | 1x |
| Parallel (async) | ~10 seconds | **4x** |

*Results from Python Async Comprehension project*

## 🎯 Learning Objectives Achieved

After completing all projects, you will master:

- ✅ **Type Annotations**: Writing type-safe, self-documenting Python code
- ✅ **Async Programming**: Creating efficient, non-blocking applications
- ✅ **Concurrency**: Understanding parallel execution and performance optimization
- ✅ **Code Quality**: Following PEP 8 standards and best practices
- ✅ **Testing**: Writing and running comprehensive test suites

## 🤝 Contribution Guidelines

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow existing code style**: PEP 8 compliance
4. **Add type annotations**: All functions must be properly typed
5. **Include documentation**: Docstrings for all modules and functions
6. **Test your changes**: Ensure all existing tests still pass
7. **Commit your changes**: `git commit -m 'Add amazing feature'`
8. **Push to the branch**: `git push origin feature/amazing-feature`
9. **Open a Pull Request**

## 📚 Additional Resources

- [Python Asyncio Documentation](https://docs.python.org/3/library/asyncio.html)
- [Python Typing Documentation](https://docs.python.org/3/library/typing.html)
- [PEP 484 - Type Hints](https://pep.python.org/pep-0484/)
- [PEP 526 - Variable Annotations](https://pep.python.org/pep-0526/)
- [Real Python - Async IO](https://realpython.com/async-io-python/)

## 📄 License

This project is part of the Holberton School curriculum and is intended for educational purposes.

---

**Author**: Alejandro  
**School**: Holberton School  
**Specialization**: Web Backend Development  
**Last Updated**: August 2025

*This repository demonstrates proficiency in advanced Python concepts essential for modern web backend development.*
