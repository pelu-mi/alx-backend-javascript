const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi()', () => {
  beforeEach(() => {
     sinon.spy(Utils, 'calculateNumber');
  });

  it('Confirm the output is correct', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });

  afterEach(() => {
    sinon.restore();
  });
});
