const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }
};
const object = {a : '1', b: 3};
const object1 = {b: 2, a: '1'};
assertObjectsEqual(object1, object);
eqObjects(object, object1);
