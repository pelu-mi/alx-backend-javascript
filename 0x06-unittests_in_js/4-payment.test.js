const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi()', () => {
  let stub = null;
  let consoleSpy = null;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console);
  });

  it('Confirm the output and validate the usage of the module', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });

  afterEach(() => {
    stub.restore();
    consoleSpy.log.restore();
  });
});
