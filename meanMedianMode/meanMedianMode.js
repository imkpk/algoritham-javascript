function getMean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;
}

// console.log(getMean([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));

// /getting median of the array.
function getMedian(arr) {
  arr.sort((a, b) => (a - b));
  let median;
  if (arr.length % 2 === 0) {
    let mid1 = arr[(arr.length / 2) - 1];
    let mid2 = arr[(arr.length) / 2];
    median = (mid1 + mid2) / 2;
  } else {
    median = arr[Math.floor(arr.length / 2)];
  }
  return median;
}

// console.log(getMedian([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));

//getting mode
function getMode(arr) {

  let modeObj = {};

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(modeObj[arr[i]]);
    if (!modeObj[arr[i]]) modeObj[arr[i]] = 0;
    modeObj[arr[i]]++;
    // console.log(modeObj);
  }
  // arr.forEach((numb) => {
  //   console.log(numb);
  //   if (!modeObj[numb]) modeObj[numb] = 0;
  //   modeObj[numb]++;
  // });

  let maxFrequency = 0;
  let modes = [];
  for (let numb in modeObj) {
    if (modeObj[numb] > maxFrequency) {
      modes = [Number(numb) ];
      maxFrequency = modeObj[numb];
      // console.log('max freq',maxFrequency);
      // console.log(modeObj[numb]);
      // console.log(modes);
    } else if (modeObj[numb] === maxFrequency) {
      modes.push(Number(numb));
    }
  }

  if (modes.length === Object.keys(modeObj).length){
      modes = [];
    }

    return modes;
  }



function meanMedianMode(arr){
  return {
    mean:getMean(arr),
    median:getMedian(arr),
    mode:getMode(arr)
  }
}

console.log(meanMedianMode([ 1, 2, 3, 4, 5, 6, 7, 3, 8, 9, 3 ]))
