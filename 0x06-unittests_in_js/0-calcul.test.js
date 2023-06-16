const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return integer with values as int and float', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return integer with values as float and float', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return integer with values as float and int', function () {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });

  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber(0.5, 3.499), 4);
  });

  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber(1.4599, 3.901), 5);
  });
});
