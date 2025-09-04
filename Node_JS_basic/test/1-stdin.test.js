const { spawn } = require('child_process');
const path = require('path');

describe('1-stdin.js', () => {
  it('should display welcome message and process user input', (done) => {
    const childProcess = spawn('node', [path.join(__dirname, '..', '1-stdin.js')]);
    
    let output = '';
    
    childProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    childProcess.stderr.on('data', (data) => {
      console.error('stderr:', data.toString());
    });
    
    childProcess.on('close', (code) => {
      // Check that welcome message is displayed
      expect(output).toMatch(/Welcome to Holberton School, what is your name\?/);
      
      // Check that user name is displayed
      expect(output).toMatch(/Your name is: Bob/);
      
      // Check closing message
      expect(output).toMatch(/This important software is now closing/);
      
      expect(code).toBe(0);
      done();
    });
    
    // Simulate user input
    setTimeout(() => {
      childProcess.stdin.write('Bob\n');
      childProcess.stdin.end();
    }, 100);
  });
  
  it('should handle empty input', (done) => {
    const childProcess = spawn('node', [path.join(__dirname, '..', '1-stdin.js')]);
    
    let output = '';
    
    childProcess.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    childProcess.on('close', (code) => {
      expect(output).toMatch(/Welcome to Holberton School, what is your name\?/);
      expect(output).toMatch(/Your name is: /);
      expect(output).toMatch(/This important software is now closing/);
      expect(code).toBe(0);
      done();
    });
    
    // Simulate empty input
    setTimeout(() => {
      childProcess.stdin.write('\n');
      childProcess.stdin.end();
    }, 100);
  });
});
