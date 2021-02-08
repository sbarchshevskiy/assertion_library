const chai = require('chai'); // 1
const assert = chai.assert;

const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail()", function() {

  it("should return assertion passed (true) , when passing equivalent length", function() {
    const words = ["test", "Yo Yo", "Lighthouse", "Labs"];

    const assertMatch = assertEqual(tail(words)[0],words[1]);
    assert.isTrue(assertMatch);
  });

  it("should return assertion failed (false), when passing equivalent length", function() {
    const words = ["Yo Yo", "Lighthouse", "Labs"];

    const assertNotMatch = assertEqual(tail(words)[1],words[1]);
    assert.isFalse(assertNotMatch);
  });

});



