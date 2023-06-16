const request = require('request');
const { expect } = require('chai');

describe('API Testing: Index page', () => {
  const url = 'http://localhost:7865';

  it('GET / - has correct status code and result', (done) => {
    request.get(`${url}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});


describe('API Testing: Cart page', () => {
  const url = 'http://localhost:7865';

  it('GET /cart/:id - has correct status code and result', (done) => {
    request.get(`${url}/cart/50`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 50');
      done();
    });
  });

  it('GET /cart/:id - negative number returns 404 status code', (done) => {
    request.get(`${url}/cart/-50`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.contain('Cannot GET /cart/-50');
      done();
    });
  });

  it('GET /cart/:id - alphanumeric value returns 404 status code', (done) => {
    request.get(`${url}/cart/da5t0`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      expect(body).to.contain('Cannot GET /cart/da5t0');
      done();
    });
  });
});


describe('API Testing: Available_payments page', () => {
  const url = 'http://localhost:7865';

  it('GET /available_payments - has correct status code and result', (done) => {
    request.get(`${url}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});

describe('API Testing: Login page', () => {
  const url = 'http://localhost:7865';

  it('POST /login - has correct status code and result', (done) => {
    request.post(`${url}/login`, {json: {userName: 'Jamiey'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Jamiey');
      done();
    });
  });
});
