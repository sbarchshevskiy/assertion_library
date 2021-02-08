const assertEqual = require('./assertEqual');

const eqObjects = function(obj1, obj2) {
  let sameNumberOfKeys = false;
  let matchedValues = [];
  let sum = 0;
  let sum1 = 0;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  //nested loop to compare both objects
  for (let i of keys1) {
    let flag = 0;
    for (let j of keys2) {
      if (i === j) {
        //flags if equivalent keys were found
        flag = 1;
      }
    }
    if (flag !== 0) {
      sum += 1;
    }
    //checks flagged number of key to list length
  }
  if (sum === keys1.length) {
    sameNumberOfKeys = true;
  }
  if (sameNumberOfKeys) {
    for (let key in obj1) {
      if (obj1[key] === obj2[key]) {
        matchedValues.push(obj1[key]);
      }
    }
  }
  for (let item of matchedValues) {
    sum1 += item;
    console.log(sum1);
    return sum1 > 0 && sum1 !== Object.keys(obj1).length ? false : true;
  }
};

//testing
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// return true
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;