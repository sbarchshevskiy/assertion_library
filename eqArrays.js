const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  // let result = true;
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     result = false;
  //   }
  // }
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  }
  // return result;
};

// (assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = eqArrays;