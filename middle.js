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



// const middle = function(arr) {
//   let index = [];
//   let indexImpair = [];
//   const findMiddle = arr.length / 2;

//   if (Number.isInteger(findMiddle)) {
//     index.push(arr[findMiddle - 1], arr[findMiddle]);
    
//     return index;
//   } else {
//     indexImpair.push(findMiddle + 0.5);
//     return arr[indexImpair];
//   }
// };

// const moreThanTwoElements = function(array) {
//   if (array.length > 2) {
//     true;
//   }
//   else return false;
// }
// const isEven = function(array) {
//   if (array.length % 2 === 0) {
//     true;
//   }
//   else return false;


middle([1, 2, 3]); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle(['a', 'b', 'c']); // => [2]
