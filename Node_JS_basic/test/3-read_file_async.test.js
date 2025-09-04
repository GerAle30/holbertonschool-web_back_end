const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('../3-read_file_async');

describe('3-read_file_async', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should export countStudents function', () => {
    expect(countStudents).to.be.a('function');
  });

  it('should return a Promise', () => {
    const result = countStudents('non-existent-file.csv');
    expect(result).to.be.instanceOf(Promise);
    
    // Clean up the promise to avoid unhandled rejection warnings
    return result.catch(() => {});
  });

  it('should read and count students from database.csv asynchronously', async () => {
    try {
      await countStudents('database.csv');
      
      // Check if console.log was called
      expect(consoleLogStub.called).to.be.true;
      
      // Check if the first call includes the total number of students
      const firstCall = consoleLogStub.getCall(0);
      expect(firstCall.args[0]).to.include('Number of students:');
      
    } catch (error) {
      // If database.csv doesn't exist or is empty, expect the error
      expect(error.message).to.equal('Cannot load the database');
    }
  });

  it('should reject promise for non-existent file', async () => {
    try {
      await countStudents('non-existent-file.csv');
      // If we reach this point, the test should fail
      expect.fail('Promise should have been rejected');
    } catch (error) {
      expect(error.message).to.equal('Cannot load the database');
    }
  });

  it('should handle promise rejection correctly', (done) => {
    countStudents('non-existent-file.csv')
      .then(() => {
        done(new Error('Promise should have been rejected'));
      })
      .catch((error) => {
        expect(error.message).to.equal('Cannot load the database');
        done();
      });
  });
});
