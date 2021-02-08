

const takeUntil = function(array, callback) {
  let positivVal = [];
  let stopCountIndex = true;

  // for (let i = 0; i < array.length; i++) {
  //   if(array[i] < 0){
  //     stopCountIndex = false;
  //   }
  //   while(stopCountIndex){
  for (let data of array) {
    if (!callback(data)) {
      positivVal.push(data);
    } else {
      break;
    }
  }
  return positivVal;
};
//
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
