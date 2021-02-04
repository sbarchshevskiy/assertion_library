const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(arr) {
  let index = [];
  let indexImpair = [];
  const findMiddle = arr.length / 2;

  if (Number.isInteger(findMiddle)) {
    index.push([findMiddle - 1], [findMiddle]);
    return index;
  } else {
    indexImpair.push(findMiddle + 0.5);
    return indexImpair;
  }
};


middle([1, 2, 3]); // => [2]
console.log(middle([1, 2, "b", 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle(['a', 'b', 'c']); // => [2]
