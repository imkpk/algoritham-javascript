function mergeSort(arr) {
  //base case
  if (arr.length < 2) return arr;

  //recursive case;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    let minElement;
    if (arr1[0] < arr2[0]) {
      minElement = arr1.shift();
    } else {
      minElement = arr2.shift();
    }
    result.push(minElement);
  }
  if (arr1.length) {
    result = result.concat(arr1);
  } else {
    result = result.concat(arr2);
  }
  return result;
}

// const mergeCall = mergeSort([ 10, 24, 3, 4, 77, 2, 9, 6, 9, 10 ]);
const mergeCall = mergeSort([ 3, 5, 5, 7, 8, 8 ]);
console.log(mergeCall);

// const mergeTwo = merge([ 5, 7, 8 ], [ 3, 5, 8 ]);
// console.log(mergeTwo);