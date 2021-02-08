const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(parsedData) {
  let middleIndex = [];
  let middleValuePair;
  let middleValueImpair;
  let middleValueImpair1;
  if (parsedData.length % 2 !== 0) {
    middleValuePair = parsedData[Math.round((parsedData.length - 1) / 2)];
    middleIndex.push(middleValuePair);
  } else {
    middleValueImpair = parsedData[Math.round((parsedData.length - 2) / 2)];
    middleValueImpair1 = parsedData[Math.round((parsedData.length - 1) / 2)];
    middleIndex.push(middleValueImpair, middleValueImpair1);
  }
  return middleIndex;
};

module.exports = middle;
