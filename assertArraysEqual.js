const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let assertion = eqArrays(arr1, arr2);
  if (assertion) {
    console.log("assertion passed");
  } else {
    console.log("assertion failed");
  }
};



module.exports = assertArraysEqual;