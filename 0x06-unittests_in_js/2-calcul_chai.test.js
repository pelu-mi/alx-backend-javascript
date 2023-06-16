const assert = require('assert');
const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');

const expect = chai.expect;


describe('calculateNumber()', () => {
  describe('calculateNumber with SUM', function () {
    it('should return integer with values as int and int', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return integer with values as int and float', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return integer with values as float and float', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return integer with values as float and int', function () {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });

    it('should return integer with values as int and int', function () {
      expect(calculateNumber('SUM', 0.5, 3.499)).to.equal(4);
    });

    it('should return integer with values as int and int', function () {
      expect(calculateNumber('SUM', 1.4599, 3.901)).to.equal(5);
    });
  });

  describe('calculateNumber with SUBTRACT', function () {
    it('should return -ve integer with values as int and int', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -ve integer with values as int and float', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should return -ve integer with values as float and float', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should return -ve integer with values as float and int', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    });

    it('should return -ve integer with values as int and int', function () {
      expect(calculateNumber('SUBTRACT', 0.5, 3.499)).to.equal(-2);
    });

    it('should return -ve integer with values as int and int', function () {
      expect(calculateNumber('SUBTRACT', 1.4599, 3.901)).to.equal(-3);
    });
  });

  describe('calculateNumber with DIVIDE', function () {
    it('should return float with values as int and int', function () {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should return float with values as int and float', function () {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return float with values as float and float', function () {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });

    it('should return float with values as float and int', function () {
      expect(calculateNumber('DIVIDE', 1.2, 4)).to.equal(0.25);
    });

    it('should return float with values as int and int', function () {
      expect(calculateNumber('DIVIDE', 0.5, 2.499)).to.equal(0.5);
    });

    it('should return integer with values as int and int', function () {
      expect(calculateNumber('DIVIDE', 4.4599, 3.901)).to.equal(1);
    });
  });

  describe('calculateNumber with ERRORS', function () {
    it('should return Error with values as int and int', function () {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

    it('should return Error with values as float and float', function () {
      expect(calculateNumber('DIVIDE', 5.1, 0.2)).to.equal('Error');
    });

    it('should return Error with values as float and float', function () {
      expect(calculateNumber('MULTIPLY', 1.2, 3.7)).to.equal('Error');
    });
  });
});
