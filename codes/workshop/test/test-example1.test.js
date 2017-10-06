const chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  assert = chai.assert;
const numberLib = require('../test-example1')

describe('Example Test', function () {
  describe('Odd Number', function () {
    it('should return false when the value is odd number', function () {
      var a = numberLib.isEven(5);
      a.should.equal(false);
      expect(a).to.equal(false);
      assert.equal(false, numberLib.isEven(5));
    });
  });
  describe('Even Number', function () {
    it('should return true when the value is even number', function () {
      var a = numberLib.isEven(2);
      a.should.equal(true);
      expect(a).to.equal(true);
      assert.equal(true, numberLib.isEven(2));
    });
  });
  describe('Invalid Input', function () {
    it('should throw error when the value is NaN', function () {
      var a = () => { numberLib.isEven('this is not a number') }
      a.should.throw();
      expect(a).to.throw();
      assert.throw(a);
    });
  });
});
