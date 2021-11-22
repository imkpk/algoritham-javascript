let arr1 = [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ];

/*let mf = 1;
 let m = 0;
 let item;

 for (let i = 0; i <arr1.length ; i++) {
 for (let j = 0; j < arr1.length; j++) {

 if(arr1[i]===arr1[j]) m++;
 if(mf<m){
 mf=m;
 item=arr1[i]
 }
 }
 m=0
 }
 console.log(item+" ( " +mf +" times ) ")*/

function mostOcc(arr) {
  let mf = 1;
  let timesOcc = 0;
  let arrItem;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[j]);
      if (arr[i] === arr[j]) timesOcc++;
      // console.log(timesOcc);
      if (mf < timesOcc) {
        mf = timesOcc;
        console.log('mf---',mf);
        console.log(arr[i]);
        arrItem = arr[i];
      }
    }
    timesOcc = 0;
  }
  return {arrItem, mf}
}

console.log(mostOcc(arr1));
