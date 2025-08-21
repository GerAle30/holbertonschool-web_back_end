export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly'
      }
    },
    rules: {
      // Basic error prevention
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-unreachable': 'error',
      
      // Code style rules
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      
      // Best practices
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // ES6+ specific
      'arrow-spacing': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      
      // Class-specific rules (relevant for ES6 classes)
      'no-dupe-class-members': 'error',
      'no-useless-constructor': 'error'
    }
  }
];
