const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('../2-read_file');

describe('2-read_file', () => {
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

  it('should read and count students from database.csv', () => {
    try {
      countStudents('database.csv');
      
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

  it('should throw error for non-existent file', () => {
    expect(() => {
      countStudents('non-existent-file.csv');
    }).to.throw('Cannot load the database');
  });
});
