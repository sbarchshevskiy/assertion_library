const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const without = function(source, itemsToRemove) {
  source = source.filter(value => !itemsToRemove.includes(value));
  return source;
};

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])
console.log(without([1, 2, 3], [1])) // => [2, 3])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;





