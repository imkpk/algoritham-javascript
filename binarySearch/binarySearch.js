// search for a given value(key) inside of a list (numberArray)
//runs in O(log n) runtime-very performed

function binarySearch(numberArray, key) {

//  import fact to remember given array must be sorted
  numberArray.sort((a, b) => (a - b));
  console.log(numberArray);

  //getting middle index
  let middleIndex = Math.floor(numberArray.length / 2);
  console.log('mid-index',middleIndex);

//  getting middle element based on middle-index
  let middleElement = numberArray[middleIndex];
  console.log('mid-Element', middleElement);

//  base-case with middle-element
  if (middleElement === key) {
    return true;
  //  recursive case
  } else if (middleElement < key && numberArray.length > 1) {
    const el1 = binarySearch(
      numberArray.splice(middleIndex, numberArray.length),
      key);
    console.log(el1);
    return el1;
  } else if (middleElement > key && numberArray.length > 1) {
    const el2 = binarySearch(numberArray.splice(0, middleIndex), key);
    console.log(el2);
    return el2;
  } else {
    return false;
  }

}

const binSearch = binarySearch([ 5, 7, 12, 16, 36, 39, 42, 56, 71, 72, 6, 8 ],
  15);
console.log(binSearch);

//factorial function
// function factorial(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
//
// const facto = factorial(4);
// console.log(facto);