const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArrays');

describe("#eqArrays()", function() {
  it("should return true if the two array contents is strict equal", function() {
    const testArray1 = [1, 2, 3];
    const testArray2 = [1, 2, 3];

    const testPass = eqArrays(testArray1, testArray2);
    assert.isTrue(testPass);

  });

  it("should return false if the two array contents are not strict equal", function() {
    const testArray1 = [1, 2, 43];
    const testArray2 = [1, 2, 1];

    const testNotPass = eqArrays(testArray1, testArray2);
    assert.isFalse(testNotPass);

  });
});
//
// (assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false