const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let assertion = eqArrays(arr1, arr2);
  if (assertion) {
    console.log("assertion passed");
  } else {
    console.log("assertion failed");
  }
};

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
// assertArraysEqual(([1, 2, 3], [1, 2, 2])); //fail
// assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
// assertArraysEqual([1, 2, 3], [1, 2, 2]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);


module.exports = assertArraysEqual;