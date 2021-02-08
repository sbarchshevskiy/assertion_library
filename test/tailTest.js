const chai = require('chai'); // 1
const assert = chai.assert;

const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail()", function() {

  it("should return assertion passed, when passing equivalent length", function() {
    const words = ["test", "Yo Yo", "Lighthouse", "Labs"];

    const assertMatch = assertEqual(tail(words)[0],words[1]);
    assert.isTrue(assertMatch);
  });

});



// Test Case: Check the original array
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 4); // original array should still have 3 elements!


