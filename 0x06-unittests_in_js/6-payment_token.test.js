const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a promise with data', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.be.an('object');
        expect(data).to.have.property('data');
        expect(data).to.deep.equal({data: 'Successful response from the API' });
        done();
      });
  });
});
