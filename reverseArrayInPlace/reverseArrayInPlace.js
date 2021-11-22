function reverseArrayInPlace(arr) {
//  Be sure to manipulate the array in place
//  dont create new array and dont push elements into new array;
//   console.log(arr.length);
  console.log(arr.length/2);
  for (let i = 0; i < arr.length/2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

// const newArr = [ 1, 2, 3, 4, 5, 6, 7 ];
// console.log(reverseArrayInPlace(newArr));


function reverseStr(str){
  // console.log(str);
  for (let i = 0; i < str.length/2; i++) {
    let tempVar = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = tempVar;
  }
  return str;
}
// const str=reverseStr(['how', 'you', 'doing', 'wax','max','tax'])
const str=reverseStr([1,2,3,4,5,6,7,89,])
console.log(str);