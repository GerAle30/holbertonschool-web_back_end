# Pagination Project

This project implements pagination utilities for efficiently handling large datasets by breaking them into smaller, manageable chunks.

## 📋 Table of Contents

- [Description](#description)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Files](#files)
- [Usage](#usage)
- [Examples](#examples)
- [Testing](#testing)
- [Author](#author)

## 📖 Description

Pagination is a fundamental concept in web development and data processing that allows you to divide large amounts of data into discrete pages. This project provides a simple helper function to calculate the start and end indices for pagination slicing.

## 🎯 Learning Objectives

By the end of this project, you should be able to:

- Understand pagination concepts and why they are important
- Implement pagination helper functions
- Calculate start and end indices for data slicing
- Handle edge cases and input validation
- Use proper type annotations in Python
- Write comprehensive docstrings

## ⚙️ Requirements

- **OS**: Ubuntu 18.04 LTS
- **Python Version**: Python 3.7
- **Style**: Code should follow `pycodestyle` (version 2.5.*)
- **Documentation**: All modules and functions must be documented
- **Type Annotations**: All functions must have type annotations
- **Executable**: All files must be executable

## 📁 Files

| File | Description |
|------|-------------|
| `simple_helper_function.py` | Contains the `index_range` function for pagination calculations |
| `README.md` | This file - project documentation |

## 🚀 Usage

### Function: `index_range(page: int, page_size: int) -> Tuple[int, int]`

Computes start and end slice indices for a given page.

#### Parameters:
- `page` (int): 1-based page number (must be >= 1)
- `page_size` (int): Number of items per page (must be >= 1)

#### Returns:
- `Tuple[int, int]`: A tuple (start, end) where start is inclusive and end is exclusive

#### Raises:
- `ValueError`: If page or page_size is less than 1

### Import and Use:

```python
from simple_helper_function import index_range

# Get indices for page 1 with 10 items per page
start, end = index_range(1, 10)
print(f"Page 1: items {start} to {end-1}")  # Output: Page 1: items 0 to 9

# Use with list slicing
data = list(range(100))  # [0, 1, 2, ..., 99]
start, end = index_range(3, 15)  # Page 3, 15 items per page
page_data = data[start:end]
print(f"Page 3 data: {page_data}")  # Output: Page 3 data: [30, 31, 32, ..., 44]
```

## 💡 Examples

### Basic Usage

```python
#!/usr/bin/env python3
from simple_helper_function import index_range

# Example 1: First page
print(index_range(1, 10))    # (0, 10)

# Example 2: Second page  
print(index_range(2, 10))    # (10, 20)

# Example 3: Different page size
print(index_range(3, 5))     # (10, 15)

# Example 4: Large page number
print(index_range(10, 7))    # (63, 70)
```

### Real-world Example with Data

```python
#!/usr/bin/env python3
from simple_helper_function import index_range

def paginate_data(data, page, page_size):
    """Paginate a list of data."""
    try:
        start, end = index_range(page, page_size)
        return data[start:end]
    except ValueError as e:
        print(f"Error: {e}")
        return []

# Sample data
users = [f"user_{i}" for i in range(1, 101)]  # 100 users

# Get different pages
page_1 = paginate_data(users, 1, 10)  # First 10 users
page_2 = paginate_data(users, 2, 10)  # Next 10 users
page_5 = paginate_data(users, 5, 15)  # 15 users starting from user 61

print(f"Page 1: {page_1}")
print(f"Page 2: {page_2}")  
print(f"Page 5: {page_5}")
```

### Error Handling

```python
#!/usr/bin/env python3
from simple_helper_function import index_range

# These will raise ValueError
try:
    index_range(0, 10)      # page must be >= 1
except ValueError as e:
    print(f"Error: {e}")

try:
    index_range(1, 0)       # page_size must be >= 1
except ValueError as e:
    print(f"Error: {e}")

try:
    index_range(-1, 5)      # page must be >= 1
except ValueError as e:
    print(f"Error: {e}")
```

## 🧪 Testing

### Run the built-in tests:

```bash
# Run the main file to see basic examples
python3 simple_helper_function.py
```

### Manual testing:

```bash
# Test the function interactively
python3 -c "
from simple_helper_function import index_range
print('Testing pagination function:')
print(f'Page 1, size 10: {index_range(1, 10)}')
print(f'Page 2, size 10: {index_range(2, 10)}')
print(f'Page 3, size 5: {index_range(3, 5)}')
"
```

### Validate code style:

```bash
# Check code style (if pycodestyle is installed)
pycodestyle simple_helper_function.py

# Check syntax
python3 -m py_compile simple_helper_function.py
```

## 📊 Mathematical Logic

The pagination calculation follows this formula:

```
For page P with page_size S:
- start_index = (P - 1) * S
- end_index = start_index + S = P * S
```

**Examples:**
- Page 1, Size 10: start=0, end=10 → items [0-9]
- Page 2, Size 10: start=10, end=20 → items [10-19]  
- Page 3, Size 5: start=10, end=15 → items [10-14]

## 🔍 Use Cases

This pagination helper is useful for:

- **Web APIs**: Implementing paginated endpoints
- **Database queries**: Limiting and offsetting results
- **UI components**: Creating page navigation
- **Data processing**: Handling large datasets in chunks
- **Performance optimization**: Reducing memory usage

## 📝 Notes

- Pages are **1-indexed** (first page is page 1, not 0)
- The returned end index is **exclusive** (like Python slice notation)
- Both `page` and `page_size` must be positive integers
- The function uses type hints for better code documentation and IDE support

## 👨‍💻 Author

**Alejandro** - Holberton School Web Back End Project

---

*This project is part of the Holberton School Web Back End curriculum, focusing on pagination concepts and Python programming best practices.*
