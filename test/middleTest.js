const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle()", function() {
  it("should return [2] as the middle value in a given array.", function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return the [2, 3] as middle values in a given array, because array length is even.", function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("should return the [3, 4] as middle values in a given array, because array length is even.", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });

});


