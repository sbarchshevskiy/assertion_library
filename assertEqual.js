// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.assert(`${actual} !== ${expected}`);
  console.log((actual === expected) ? ` ✅✅✅ Assertion passed ✅✅✅ ${actual} === ${expected}` : ` 🛑🛑🛑 Assertion failed 🛑🛑🛑 ${actual} === ${expected}`);
  return actual === expected;
};

module.exports = assertEqual;