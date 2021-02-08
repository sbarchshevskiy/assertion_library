const chai = require('chai');
const assert = chai.assert;

const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


describe("#assertArrayEqual()", function() {
  it("should assert equal contents withing two array and return true if passes", function() {
    const testArray1 = [1, 2, 3]; //passes
    const testArray2 = [1, 2, 3];

    const testPassed = assertArraysEqual(testArray1, testArray2);
    assert.isTrue(testPassed);

  });
  it("should assert equal contents withing two array and return false if test does not pass.", function() {
    const testArray1 = [1, 2, 3]; //passes
    const testArray2 = [1, 1, 3];

    const testFailed = assertArraysEqual(testArray2);
    assert.isFalse(testFailed);

  });

});
