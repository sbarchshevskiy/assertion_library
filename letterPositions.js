const letterPositions = function(sentence) {
  let finalObject = {};
  for (let letter in sentence) {
    //sentence at indexes (letters return # positions) the following checks whether loop reaches a 'space' character.
    if (sentence[letter] !== ' ') {
      //final object goes through each index and it's corresponding letter
      if (finalObject[sentence[letter]]) {
        //letters! take your positions!!!
        //.push only takes in the number of times letters repeat and it assigns its values to related indexes
        finalObject[sentence[letter]].push(Number(letter));
      } else {
        //matches the singular character indexes
        finalObject[sentence[letter]] = [Number(letter)];
      }
    }
  }
  return finalObject;
};


console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('sergey'));