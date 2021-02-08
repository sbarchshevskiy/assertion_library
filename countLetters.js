const assertEqual = require('./assertEqual');
//returns an object {key - letter : value - number} of times they occur
const countLetters  = function(str) {
  let letters = {};
  for (let letter in str) {
    if (letters[str[letter]]) {
      letters[str[letter]]++;
    } else {
      letters[str[letter]] = 1;
    }
  }
  return letters;
};
