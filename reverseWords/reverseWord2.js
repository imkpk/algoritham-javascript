function reverseWord2(str) {
  const newStr = str.split(' ');
  let totalReverse = [];
  // console.log(newStr);
  /*for (let i = 0; i < newStr.length; i++) {
   let reverseWord = '';
   let word = newStr[i];
   for (let j = word.length - 1; j>= 0; j--) {
   console.log(word[j]);
   // reverseWord += word[i];
   }
   // console.log(reverseWord);
   totalReverse.push(reverseWord);
   }*/
  // return totalReverse.join(' ');

  newStr.forEach(word => {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      console.log(word[i]);
      reverseWord += word[i];
    }
    totalReverse.push(reverseWord);
  });
  return totalReverse.join(' ');
}

console.log(reverseWord2('hi how r u babai'));