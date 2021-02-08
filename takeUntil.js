const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

const example1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const test1 = takeUntil(example1, x => x < 0);
//returns  [ 1, 2, 5, 7, 2 ]
const example2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const test2 = takeUntil(example2, x => x === ',');
// return [ "I've", 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;