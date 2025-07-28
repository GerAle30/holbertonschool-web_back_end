# 📘 Python - Variable Annotations

This project introduces **type annotations** in Python 3, a powerful feature that improves code readability, tooling support, and early error detection using tools like `mypy`.

---

## 📚 Learning Objectives

By completing this project, you will be able to:

- Understand **type annotations** in Python 3
- Annotate function signatures and variable types using the `typing` module
- Apply the concept of **Duck Typing** in Python
- Validate Python code using the `mypy` type checker
- Write clean, maintainable, and properly documented Python code

---

## 🛠️ Requirements

- Python 3.9 on Ubuntu 20.04 LTS
- Code style: [pycodestyle](https://pycodestyle.pycqa.org/en/latest/) (PEP8) version 2.5
- All scripts start with `#!/usr/bin/env python3`
- All scripts must be executable and end with a new line
- Use only `vi`, `vim`, or `emacs`
- Each module, class, and function includes a docstring with a clear purpose

---

## 🧠 Key Concepts

### ✅ Type Annotations

Python allows you to annotate variable types and function signatures using this syntax:

```python
def greet(name: str) -> str:
    return f"Hello, {name}"

