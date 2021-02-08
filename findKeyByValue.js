const assertEqual = require('./assertEqual');

const findKeyByValue = (keys, values) => {
  let result;
  for (let key in keys) {
    //keys are film genre and values are the names of the show.
    if (keys[key] === values) {
      result = key;
    }
  }
  //returns a string
  return result;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//test
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;