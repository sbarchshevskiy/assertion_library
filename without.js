const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {
  let remainingItems = [];
  for (let i = 0; i < source.length; i++) {
    let flag = 0;
    for (let j = 0; j < itemsToRemove; j++) {
      if (source[i] === itemsToRemove[j]) {
        flag = 1;
      }
    }
    if (flag === 0) {
      remainingItems.push(source[i]);
    }
  }
  return remainingItems;
  // return source;
};

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => [ '1', '2', '3' ]
console.log(without([1, 2, 3], [1])) // => [2, 3]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["world", "hello", "lighthouse"])); // returns false

// alt function:
// source = source.filter(value => !itemsToRemove.includes(value));

module.exports = without;





