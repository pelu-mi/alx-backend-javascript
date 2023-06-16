const request = require('request');
const { expect } = require('chai');

describe('API Testing: Index page', () => {
  const url = 'http://localhost:7865';

  it('has correct status code and result', () => {
    request.get(`${url}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
