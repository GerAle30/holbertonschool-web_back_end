const { expect } = require('chai');
const sinon = require('sinon');

describe('0-console', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should export displayMessage function', () => {
    const displayMessage = require('../0-console');
    expect(displayMessage).to.be.a('function');
  });

  it('should log the correct message', () => {
    const displayMessage = require('../0-console');
    const testMessage = 'Hello NodeJS!';
    
    displayMessage(testMessage);
    
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith(testMessage)).to.be.true;
  });

  it('should handle empty string', () => {
    const displayMessage = require('../0-console');
    const testMessage = '';
    
    displayMessage(testMessage);
    
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith(testMessage)).to.be.true;
  });
});
