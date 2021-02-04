const assertEqual = require('./assertEqual');


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



console.log(countLetters('LHL'));
console.log(countLetters('sergey'));

