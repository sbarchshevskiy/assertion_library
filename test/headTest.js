const assert = require('chai').assert;
const head = require('../head');
const assertEqual = require('../assertEqual');


describe("#head()", function() {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return Hello for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should return true while asserting [\"Hello\", \"Lighthouse\", \"Labs\"]," +
    "with first actual and expected equal (assertEqual)",  () => {
    assert.isTrue(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
  });
});
