function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    // console.log('outer loop---', arr[i]);
    for (let j = 0; j < i; j++) {
      console.log(`inner loop`, arr[j]);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // console.log('----temp--value', temp);
      }
    }
  }

  return arr;
}

const arrrr=[5,3,8,7,-9,2,-10]
const sortedArr = bubbleSort([ 5, 3, 8, 7, 9, 2 ]);
// console.log(sortedArr);

arrrr.sort((a,b)=>(a-b))
console.log(arrrr);