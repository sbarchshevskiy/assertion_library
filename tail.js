const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Test Case: Check the original array
const words = ["test", "Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 3 elements!


assertEqual(tail(words)[0],words[1]);

x = 12;
if(true) {
  x + 2;
  x = 4;
}
console.log(x);

