const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with SUM', function () {
  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return integer with values as int and float', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should return integer with values as float and float', function () {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should return integer with values as float and int', function () {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
  });

  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('SUM', 0.5, 3.499), 4);
  });

  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4599, 3.901), 5);
  });
});

describe('calculateNumber with SUBTRACT', function () {
  it('should return -ve integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it('should return -ve integer with values as int and float', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });

  it('should return -ve integer with values as float and float', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });

  it('should return -ve integer with values as float and int', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3), -2);
  });

  it('should return -ve integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 3.499), -2);
  });

  it('should return -ve integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4599, 3.901), -3);
  });
});

describe('calculateNumber with DIVIDE', function () {
  it('should return float with values as int and int', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
  });

  it('should return float with values as int and float', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });

  it('should return float with values as float and float', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
  });

  it('should return float with values as float and int', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 4), 0.25);
  });

  it('should return float with values as int and int', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 0.5, 2.499), 0.5);
  });

  it('should return integer with values as int and int', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4.4599, 3.901), 1);
  });
});

describe('calculateNumber with ERRORS', function () {
  it('should return Error with values as int and int', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });

  it('should return Error with values as float and float', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 5.1, 0.2), 'Error');
  });

  it('should return Error with values as float and float', function () {
    assert.strictEqual(calculateNumber('MULTIPLY', 1.2, 3.7), 'Error');
  });
});
