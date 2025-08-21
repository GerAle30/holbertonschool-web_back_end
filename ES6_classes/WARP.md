# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an ES6 Classes educational project focused on JavaScript class implementations. The codebase demonstrates ES6 class syntax, constructor patterns, and property handling using modern JavaScript module system.

## Development Commands

### Testing
- `npm test` - Run all Jest tests
- `jest <file-pattern>` - Run specific test files
- `jest --watch` - Run tests in watch mode

### Linting
- `npm run lint <files>` - Lint specific files with ESLint
- `npm run check-lint` - Lint files matching pattern `[0-9]*.js`
- `npm run full-test` - Run both linting and tests

### Execution
- `npx babel-node <file>` - Execute JavaScript files using Babel transpilation
- `npm run dev <file>` - Alternative way to run files with Babel

### Code Quality
- `npx eslint --fix <files>` - Auto-fix linting issues where possible

## Architecture and Patterns

### Module System
- Uses ES6 modules (`import`/`export`)
- `package.json` specifies `"type": "module"` for native ES6 module support
- All class definitions use `export default` pattern

### Class Structure
- Classes follow ES6 syntax with proper constructors
- Private-like properties use underscore prefix convention (`_property`)
- Constructor parameters are directly assigned to instance properties
- No getter/setter methods in basic implementations

### Testing Patterns
- Comprehensive Jest test suites for each class
- Tests cover constructor behavior, edge cases, and instance independence
- Test files follow naming pattern: `<number>-<classname>.test.js`
- Tests verify both positive cases and boundary conditions (null, undefined, different types)

### File Naming Convention
- Main class files: `<number>-<classname>.js`
- Test files: `<number>-<classname>.test.js` 
- Example/demo files: `<number>-main.js`

## Configuration Details

### Babel Configuration
- Uses `@babel/preset-env` with Node.js current target
- Configuration in ES6 module format (`babel.config.js`)

### ESLint Configuration
- Extends Airbnb base configuration with Jest plugin
- Allows multiple classes per file and underscore-prefixed properties
- Configured for ES6+ and Jest environment
- Two configuration files present (`.eslintrc.js` and `eslint.config.js`)

### Development Dependencies
- Babel ecosystem for transpilation
- Jest for testing framework
- ESLint for code quality
- All development tooling, no production dependencies

## Common Development Workflow

1. Create class implementation in `<n>-<name>.js`
2. Create corresponding test file `<n>-<name>.test.js`
3. Create demo/example file `<n>-main.js`
4. Run tests: `npm test`
5. Check linting: `npm run lint <files>`
6. Execute demo: `npx babel-node <n>-main.js`

## Testing Strategy

Tests should comprehensively cover:
- Basic constructor functionality
- Edge cases (null, undefined, various types)
- Instance property existence and accessibility
- Class behavior and prototype chain
- Instance independence
