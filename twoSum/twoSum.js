function twoSum(numArray, sum) {
  // returns every pair of numbers from 'numArray'
  //that adds up to the 'sum'
  // rules
//  result should be an array of arrays
//  any number in the 'numArray' can be used in multiple pairs
//  i/p: numArray=[1,6,4,5,3,3] so o/p: result=[[6,1],[3,4],[3,4]]
  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < numArray.length; i++) {
    let curNum = numArray[i];
    //counter part means number to added to the current number to get the sum;
    let counterPart = sum - curNum;
    // console.log(counterPart);
    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([ curNum, counterPart ]);
    }
    console.log(pairs);
    hashTable.push(curNum);
    // console.log(hashTable);
  }
return pairs;
}
const twosumm=twoSum([ 1, 5, 6, 7, 9, 3, 2, 10 ], 12)
// console.log(twosumm)
