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
//  example of return
// lighthouse in the house
// {
//   l: [ 0 ],
//   i: [ 1, 11 ],
//   g: [ 2 ],
//   h: [ 3, 5, 15, 18 ],
//   t: [ 4, 14 ],
//   o: [ 6, 19 ],
//   u: [ 7, 20 ],
//   s: [ 8, 21 ],
//   e: [ 9, 16, 22 ],
//   n: [ 12 ]
// }
