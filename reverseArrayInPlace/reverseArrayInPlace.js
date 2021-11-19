function reverseArrayInPlace(arr) {
//  Be sure to manipulate the array in place
//  dont create new array and dont push elements into new array;
//   console.log(arr.length);
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    // console.log(tempVar);
    arr[i] = arr[arr.length - 1 - i];
    // console.log(arr[i]);
    // console.log(arr[arr.length - 1 - i]);
    arr[arr.length - 1 - i] = tempVar;
    // console.log(tempVar);

    // arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

const newArr = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(reverseArrayInPlace(newArr));
