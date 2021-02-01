// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.assert(`${actual} !== ${expected}`);
  console.log((actual === expected) ? ` ✅✅✅ Assertion passed ✅✅✅ ${actual} === ${expected}` : ` 🛑🛑🛑 Assertion failed 🛑🛑🛑 ${actual} === ${expected}`);

  //alternative to ternary operators
  // if (actual === expected) {
  //   console.log(` ✅✅✅ Assertion passed ✅✅✅ ${actual} === ${expected}`);
  // } else {
  //   console.log(` 🛑🛑🛑 Assertion failed 🛑🛑🛑 ${actual} === ${expected}`);
  // }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(undefined, undefined);
assertEqual(undefined, null);