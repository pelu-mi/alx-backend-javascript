const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi()', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  it('Confirm the output and validate the usage of the module with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it('Confirm the output and validate the usage of the module with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
