# 📟 Node.js Basic

```
 ╔══════════════════════════════════════════════════════════════╗
 ║                    🚀 RETRO COMPUTING VIBES                  ║
 ║                  Node.js Fundamentals Project                ║
 ╚══════════════════════════════════════════════════════════════╝
```

<div align="center">

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

**Version:** `1.0.0` | **License:** `ISC`

</div>

---

## 📖 Table of Contents

```
 ┌─────────────────────────────────────────┐
 │ 🎯 About                                │
 │ ⚡ Quick Start                          │
 │ 📁 Project Structure                    │
 │ 🛠️  Technologies Used                   │
 │ 🧪 Testing                             │
 │ 📚 Learning Objectives                 │
 │ 🎮 Available Scripts                   │
 │ 📄 License                             │
 └─────────────────────────────────────────┘
```

---

## 🎯 About

**Node.js Basic** is a comprehensive collection of fundamental Node.js exercises and examples, designed to master the core concepts of server-side JavaScript development. This project takes you on a retro journey through the building blocks of modern web development.

```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ TERMINAL OUTPUT > Learning Node.js...    ▓
▓ STATUS > [████████████████████] 100%    ▓
▓ MEMORY > 256KB FREE                     ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```

---

## ⚡ Quick Start

### Prerequisites

```bash
┌─ SYSTEM REQUIREMENTS ─┐
│ Node.js >= 12.x.x     │
│ npm >= 6.x.x          │
│ Terminal/CMD          │
└───────────────────────┘
```

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Node_JS_basic

# Install dependencies
npm install

# Run the basic console example
node 0-console.js
```

### 🔥 Hot Start Development

```bash
# Start development server with hot reload
npm run dev

# Run all tests with linting
npm run test-all

# Watch mode for testing
npm run test-watch
```

---

## 📁 Project Structure

```
Node_JS_basic/
├── 📄 0-console.js          ← Console output basics
├── 📄 1-stdin.js            ← Standard input handling
├── 📄 2-read_file.js        ← File reading (sync)
├── 📄 3-read_file_async.js  ← File reading (async)
├── 📄 3-http_server.js      ← Basic HTTP server
├── 📄 4-http.js             ← Advanced HTTP handling
├── 📄 5-http.js             ← Route-based HTTP server
├── 📄 6-http_express.js     ← Express.js introduction
├── 📄 7-http_express.js     ← Express.js with routes
├── 📄 database.csv          ← Sample data file
├── 📁 full_server/          
│   ├── 📄 server.js         ← Complete Express server
│   └── 📄 utils.js          ← Utility functions
├── 📄 package.json          ← Project configuration
├── 📄 .babelrc             ← Babel configuration
├── 📄 .eslintrc.js         ← ESLint rules
└── 📄 README.md            ← You are here!
```

---

## 🛠️ Technologies Used

<details>
<summary>🔧 Click to expand tech stack</summary>

### Core Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Babel** - JavaScript transpiler

### Development Tools
- **ESLint** - Code linting and formatting
- **Mocha** - Testing framework
- **Chai** - Assertion library
- **Nodemon** - Development server with hot reload

### Testing & Quality
- **Supertest** - HTTP assertion library
- **Sinon** - Test spies, stubs, and mocks
- **Chai-HTTP** - HTTP integration testing

</details>

---

## 🧪 Testing

```bash
██████████████████████████████████████████
██                                      ██
██  TEST SUITE INITIALIZATION...        ██
██                                      ██
██████████████████████████████████████████

# Run individual tests
npm test

# Run with linting
npm run check-lint

# Full test suite
npm run full-test

# Watch mode for TDD
npm run test-watch
```

### Test Coverage

| Module | Status | Coverage |
|--------|--------|----------|
| Console Operations | ✅ PASS | 100% |
| File I/O | ✅ PASS | 100% |
| HTTP Server | ✅ PASS | 100% |
| Express Routes | ✅ PASS | 100% |

---

## 📚 Learning Objectives

```
┌─ MISSION OBJECTIVES ─┐
│ ✓ Node.js Basics     │
│ ✓ File System Ops   │
│ ✓ HTTP Server Setup  │
│ ✓ Express Framework │
│ ✓ Async Programming │
│ ✓ Error Handling    │
│ ✓ Testing Patterns  │
└──────────────────────┘
```

### Skills Acquired

- **🎮 Console I/O**: Master standard input/output operations
- **📂 File Operations**: Synchronous and asynchronous file handling
- **🌐 HTTP Servers**: Create and configure basic HTTP servers
- **⚡ Express.js**: Build web applications with Express framework
- **🔄 Async/Await**: Handle asynchronous operations effectively
- **🧪 Testing**: Implement comprehensive test suites
- **🎯 ES6+**: Modern JavaScript features and syntax

---

## 🎮 Available Scripts

<table>
<tr>
<th>Command</th>
<th>Description</th>
<th>Usage</th>
</tr>
<tr>
<td><code>npm test</code></td>
<td>Run test suite</td>
<td>🧪 Testing</td>
</tr>
<tr>
<td><code>npm run lint</code></td>
<td>Check code quality</td>
<td>✨ Code Quality</td>
</tr>
<tr>
<td><code>npm run dev</code></td>
<td>Development server</td>
<td>🚀 Development</td>
</tr>
<tr>
<td><code>npm run test-all</code></td>
<td>Lint + test</td>
<td>🎯 Full Check</td>
</tr>
<tr>
<td><code>npm run test-watch</code></td>
<td>Watch mode testing</td>
<td>👀 TDD Mode</td>
</tr>
</table>

---

## 🏁 Getting Started Examples

### 1. Basic Console Output
```javascript
/**
 * Displays a message on STDOUT.
 * @param {String} msg - The message to display.
 */
const displayMessage = (msg) => {
  console.log(msg);
};

module.exports = displayMessage;
```

### 2. HTTP Server Creation
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
```

---

## 🎨 ASCII Art Status

```
     ╔═══════════════════════════════════════╗
     ║           PROJECT STATUS              ║
     ║                                       ║
     ║  [████████████████████████████] 100%  ║
     ║                                       ║
     ║  📊 Tests:     ✅ PASSING             ║
     ║  🔍 Linting:   ✅ CLEAN               ║
     ║  🚀 Build:     ✅ SUCCESS             ║
     ║  📈 Coverage:  ✅ 100%                ║
     ╚═══════════════════════════════════════╝
```

---

## 📄 License

```
┌─────────────────────────────────────────┐
│                                         │
│  ISC License                           │
│                                         │
│  Copyright (c) 2024                    │
│  All rights reserved.                  │
│                                         │
└─────────────────────────────────────────┘
```

---

<div align="center">

**🎯 Happy Coding! 🎯**

```
 _____ _   _ _____   _____ _   _ _____  
|_   _| | | |  ___| |  ___| \ | |  _  | 
  | | | |_| | |__   | |__ |  \| | | | | 
  | | |  _  |  __|  |  __|| . ` | | | | 
  | | | | | | |___  | |___| |\  | |/ /  
  \_/ \_| |_\____/  \____/\_| \_/___/   
```

*Made with ❤️ and lots of ☕*

</div>
