const request = require('request');
const { expect } = require('chai');

describe('API Testing:', () => {
  const url = 'http://localhost:7865';

  it('GET / - has correct status code and result', (done) => {
    request.get(`${url}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });

  it('GET /cart/:id - has correct status code and result', (done) => {
    request.get(`${url}/50`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart :50');
      done();
    });
  });

  it('GET /cart/:id - negative number returns 404 status code', (done) => {
    request.get(`${url}/-50`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id - alphanumeric value returns 404 status code', (done) => {
    request.get(`${url}/-da5t0`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
