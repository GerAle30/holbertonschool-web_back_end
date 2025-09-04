const { expect } = require('chai');
const sinon = require('sinon');
const { spawn } = require('child_process');
const path = require('path');

describe('1-stdin', () => {
  it('should display welcome message and handle input', (done) => {
    const scriptPath = path.join(__dirname, '../1-stdin.js');
    const child = spawn('node', [scriptPath]);
    
    let output = '';
    
    child.stdout.on('data', (data) => {
      output += data.toString();
      
      if (output.includes('Welcome to Holberton School, what is your name?')) {
        // Send a name to stdin
        child.stdin.write('Test User\n');
        child.stdin.end();
      }
    });
    
    child.on('close', (code) => {
      expect(output).to.include('Welcome to Holberton School, what is your name?');
      expect(output).to.include('Your name is: Test User');
      expect(output).to.include('This important software is now closing');
      expect(code).to.equal(0);
      done();
    });
    
    child.on('error', (error) => {
      done(error);
    });
  });

  it('should handle different names correctly', (done) => {
    const scriptPath = path.join(__dirname, '../1-stdin.js');
    const child = spawn('node', [scriptPath]);
    
    let output = '';
    
    child.stdout.on('data', (data) => {
      output += data.toString();
      
      if (output.includes('Welcome to Holberton School, what is your name?')) {
        child.stdin.write('John Doe\n');
        child.stdin.end();
      }
    });
    
    child.on('close', (code) => {
      expect(output).to.include('Your name is: John Doe');
      done();
    });
    
    child.on('error', (error) => {
      done(error);
    });
  });
});
