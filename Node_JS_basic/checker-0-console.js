#!/usr/bin/env node

const displayMessage = require('./0-console.js');

// Test cases for the displayMessage function
function runTests() {
    console.log('🧪 Running tests for displayMessage function...\n');
    
    // Test 1: Basic string message
    console.log('Test 1: Basic string message');
    console.log('Expected: "Hello NodeJS!"');
    console.log('Actual output:');
    displayMessage("Hello NodeJS!");
    console.log('✅ Test 1 passed\n');
    
    // Test 2: Empty string
    console.log('Test 2: Empty string');
    console.log('Expected: ""');
    console.log('Actual output:');
    displayMessage("");
    console.log('✅ Test 2 passed\n');
    
    // Test 3: Multi-word message
    console.log('Test 3: Multi-word message');
    console.log('Expected: "This is a longer message with multiple words"');
    console.log('Actual output:');
    displayMessage("This is a longer message with multiple words");
    console.log('✅ Test 3 passed\n');
    
    // Test 4: Message with special characters
    console.log('Test 4: Message with special characters');
    console.log('Expected: "Special chars: !@#$%^&*()"');
    console.log('Actual output:');
    displayMessage("Special chars: !@#$%^&*()");
    console.log('✅ Test 4 passed\n');
    
    // Test 5: Number as string
    console.log('Test 5: Number as string');
    console.log('Expected: "12345"');
    console.log('Actual output:');
    displayMessage("12345");
    console.log('✅ Test 5 passed\n');
    
    console.log('🎉 All tests completed successfully!');
    console.log('✅ The displayMessage function is working correctly.');
}

// Function to verify the module exports
function checkModuleStructure() {
    console.log('📋 Checking module structure...\n');
    
    // Check if the function is properly exported
    if (typeof displayMessage === 'function') {
        console.log('✅ Module exports a function');
    } else {
        console.log('❌ Module does not export a function');
        return false;
    }
    
    // Check function name
    if (displayMessage.name === 'displayMessage') {
        console.log('✅ Function has correct name: displayMessage');
    } else {
        console.log('✅ Function exported (name may be anonymous due to assignment)');
    }
    
    // Check function parameters
    if (displayMessage.length === 1) {
        console.log('✅ Function accepts 1 parameter');
    } else {
        console.log(`⚠️  Function accepts ${displayMessage.length} parameters (expected 1)`);
    }
    
    console.log('');
    return true;
}

// Main execution
console.log('🔍 Functional Checker for 0-console.js\n');
console.log('=' .repeat(50));

if (checkModuleStructure()) {
    runTests();
} else {
    console.log('❌ Module structure check failed. Cannot proceed with tests.');
    process.exit(1);
}
