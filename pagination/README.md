# 📄 Pagination Project

> A comprehensive implementation of pagination techniques for handling large datasets efficiently in Python web applications.

## 📋 Table of Contents

- [Description](#-description)
- [Learning Objectives](#-learning-objectives)
- [Requirements](#-requirements)
- [Project Structure](#-project-structure)
- [Tasks Overview](#-tasks-overview)
- [Usage Examples](#-usage-examples)
- [Testing](#-testing)
- [Author](#-author)

## 📖 Description

This project implements various pagination strategies commonly used in web development and data processing. It demonstrates how to efficiently handle large datasets by breaking them into smaller, manageable pages, including advanced techniques like hypermedia pagination and deletion-resilient pagination.

## 🎯 Learning Objectives

By completing this project, you will learn to:

- ✅ Implement basic pagination helper functions
- ✅ Create server-side pagination with CSV data sources
- ✅ Build hypermedia pagination with navigation metadata
- ✅ Develop deletion-resilient pagination systems
- ✅ Apply proper Python type annotations and documentation
- ✅ Follow PEP 8 coding standards and best practices
- ✅ Handle edge cases and input validation

## ⚙️ Requirements

- **OS**: Ubuntu 18.04 LTS
- **Python Version**: Python 3.7+
- **Style Guide**: PEP 8 (`pycodestyle` version 2.5.*)
- **Documentation**: All modules and functions must be documented
- **Type Annotations**: All functions must have proper type hints
- **File Permissions**: All files must be executable

## 🗂️ Project Structure

```
pagination/
├── README.md                           # This comprehensive documentation
├── 0-simple_helper_function.py        # Task 0: Basic pagination helper
├── 1-simple_pagination.py             # Task 1: Simple server pagination  
├── 2-hypermedia_pagination.py         # Task 2: Hypermedia pagination
├── 3-hypermedia_del_pagination.py     # Task 3: Deletion-resilient pagination
├── 2-main.py                          # Test file for hypermedia pagination
└── Popular_Baby_Names.csv             # Dataset (not included in repo)
```

## 📚 Tasks Overview

### Task 0: Simple Helper Function
**File**: `0-simple_helper_function.py`

```python
def index_range(page: int, page_size: int) -> Tuple[int, int]
```

Basic pagination helper that calculates start and end indices for page slicing.

**Features:**
- 1-indexed pages (page 1 = first page)
- Returns tuple (start, end) for list slicing
- Input validation with proper error handling

### Task 1: Simple Pagination
**File**: `1-simple_pagination.py`

```python
class Server:
    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]
```

Server class that paginates a CSV dataset of popular baby names.

**Features:**
- CSV data loading and caching
- Page-based data retrieval
- Assertion-based input validation
- Returns empty list for out-of-range pages

### Task 2: Hypermedia Pagination
**File**: `2-hypermedia_pagination.py`

```python
class Server:
    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]
```

Extends simple pagination with hypermedia-style metadata.

**Features:**
- All functionality from Task 1
- Rich metadata including navigation links
- Total pages calculation
- Previous/next page indicators

**Return Format:**
```python
{
    "page_size": int,      # Number of items in current page
    "page": int,           # Current page number
    "data": List[List],    # Actual page data
    "next_page": int,      # Next page number (or None)
    "prev_page": int,      # Previous page number (or None) 
    "total_pages": int     # Total number of pages
}
```

### Task 3: Deletion-Resilient Hypermedia Pagination
**File**: `3-hypermedia_del_pagination.py`

```python
class Server:
    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict[str, Any]
```

Advanced pagination that remains consistent even when data is deleted.

**Features:**
- Index-based pagination (resilient to deletions)
- Maintains cursor position during data changes
- Efficient indexed dataset caching
- Proper handling of missing indices

**Return Format:**
```python
{
    "index": int,          # Starting index of current page
    "data": List[List],    # Current page data
    "page_size": int,      # Number of items in current page
    "next_index": int      # Index for next page
}
```

## 🚀 Usage Examples

### Basic Pagination Helper

```python
#!/usr/bin/env python3
from 0_simple_helper_function import index_range

# Calculate indices for different pages
print(index_range(1, 10))    # (0, 10) - Page 1, 10 items
print(index_range(2, 10))    # (10, 20) - Page 2, 10 items
print(index_range(3, 5))     # (10, 15) - Page 3, 5 items

# Use with actual data
data = list(range(100))  # Sample data: [0, 1, 2, ..., 99]
start, end = index_range(3, 15)
page_data = data[start:end]  # Get page 3 with 15 items
print(f"Page 3: {page_data}")  # [30, 31, 32, ..., 44]
```

### Simple Server Pagination

```python
#!/usr/bin/env python3
from 1_simple_pagination import Server

server = Server()

# Get different pages
page_1 = server.get_page(1, 5)      # First 5 rows
page_2 = server.get_page(2, 5)      # Next 5 rows
out_of_range = server.get_page(1000, 5)  # Returns []

print(f"Page 1: {len(page_1)} items")
print(f"Page 2: {len(page_2)} items")
print(f"Out of range: {len(out_of_range)} items")
```

### Hypermedia Pagination

```python
#!/usr/bin/env python3
from 2_hypermedia_pagination import Server

server = Server()

# Get hypermedia response
result = server.get_hyper(page=2, page_size=10)

print(f"Current page: {result['page']}")
print(f"Items on page: {result['page_size']}")
print(f"Total pages: {result['total_pages']}")
print(f"Next page: {result['next_page']}")
print(f"Previous page: {result['prev_page']}")
print(f"Data sample: {result['data'][:2]}...")  # First 2 items
```

### Deletion-Resilient Pagination

```python
#!/usr/bin/env python3
from 3_hypermedia_del_pagination import Server

server = Server()

# Start pagination from beginning
result = server.get_hyper_index(index=None, page_size=10)
print(f"Starting at index: {result['index']}")
print(f"Items retrieved: {result['page_size']}")
print(f"Next index: {result['next_index']}")

# Continue from where we left off
next_result = server.get_hyper_index(index=result['next_index'], page_size=10)
print(f"Continuing from index: {next_result['index']}")
```

## 🧪 Testing

### Code Style Validation

```bash
# Check all files for PEP 8 compliance
pycodestyle *.py

# Check specific file
pycodestyle 0-simple_helper_function.py
```

### Syntax Validation

```bash
# Compile all Python files
python3 -m py_compile *.py

# Test specific file
python3 -m py_compile 2-hypermedia_pagination.py
```

### Functional Testing

```bash
# Test basic helper function
python3 -c "
from 0_simple_helper_function import index_range
print('Basic tests:')
print(f'Page 1, size 10: {index_range(1, 10)}')
print(f'Page 2, size 10: {index_range(2, 10)}')
print(f'Page 3, size 5: {index_range(3, 5)}')
"

# Test hypermedia pagination (requires CSV file)
python3 2-main.py
```

### Manual Testing Examples

```python
# Test all pagination methods
#!/usr/bin/env python3

# Test Task 0
from 0_simple_helper_function import index_range
assert index_range(1, 10) == (0, 10)
assert index_range(2, 10) == (10, 20)
print("✓ Task 0 tests passed")

# Test Task 1 (requires CSV file)
try:
    from 1_simple_pagination import Server
    server = Server()
    page = server.get_page(1, 5)
    print(f"✓ Task 1 tests passed - got {len(page)} items")
except FileNotFoundError:
    print("⚠ Task 1 requires Popular_Baby_Names.csv file")

# Test Task 2 (requires CSV file)
try:
    from 2_hypermedia_pagination import Server
    server = Server()
    result = server.get_hyper(1, 5)
    required_keys = {'page_size', 'page', 'data', 'next_page', 'prev_page', 'total_pages'}
    assert set(result.keys()) == required_keys
    print("✓ Task 2 tests passed")
except FileNotFoundError:
    print("⚠ Task 2 requires Popular_Baby_Names.csv file")

# Test Task 3 (requires CSV file)
try:
    from 3_hypermedia_del_pagination import Server
    server = Server()
    result = server.get_hyper_index(None, 5)
    required_keys = {'index', 'data', 'page_size', 'next_index'}
    assert set(result.keys()) == required_keys
    print("✓ Task 3 tests passed")
except FileNotFoundError:
    print("⚠ Task 3 requires Popular_Baby_Names.csv file")
```

## 📊 Performance Considerations

### Caching Strategy
- **Dataset Caching**: CSV data is loaded once and cached in memory
- **Indexed Dataset**: Pre-computed index mapping for O(1) lookups
- **Memory Trade-off**: Uses more memory for faster subsequent access

### Efficiency Tips
- Use appropriate page sizes (10-100 items typically optimal)
- Consider database-level pagination for very large datasets
- Implement proper error handling for production use
- Monitor memory usage with large cached datasets

## 🔍 Real-World Applications

- **REST APIs**: Implementing paginated endpoints (`/api/users?page=2&limit=20`)
- **Web Applications**: Creating page navigation components
- **Data Processing**: Handling large CSV/JSON files in chunks
- **Database Operations**: Implementing LIMIT/OFFSET queries
- **Search Results**: Displaying search results across multiple pages

## 📝 Key Concepts

### 1-Indexed vs 0-Indexed
- **This project uses 1-indexed pages** (page 1 = first page)
- Internally converts to 0-indexed for array slicing
- Common in user interfaces and APIs

### Hypermedia Controls
- Provides navigation metadata alongside data
- Enables client applications to build pagination UI
- Follows REST API best practices

### Deletion Resilience
- Index-based approach maintains consistency
- Handles data modifications gracefully
- Essential for real-time applications

## 👨‍💻 Author

**Alejandro** - Holberton School Student  
📧 [Contact Information]  
🔗 [GitHub Profile]

---

## 📄 License

This project is part of the **Holberton School Web Back End** curriculum.  
*Educational use only.*

---

*⭐ If you found this project helpful, please consider giving it a star!*
