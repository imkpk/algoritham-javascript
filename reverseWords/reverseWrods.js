function reverseWords(str) {
  //reverse every word in the string
//  every word should be reversed but the string as a whole should not be
//   should not use array.reverse() method
  let wordsArray = str.split(' ');
  let reverseWardsArray = [];
  wordsArray.forEach(word => {
    let reverseW0rd = '';
    for (let i = word.length - 1; i >= 0; i--) {
      console.log(word[i]);
      reverseW0rd += word[i];
    }
    // console.log(reverseW0rd);
    reverseWardsArray.push(reverseW0rd);
  });
  // console.log(reverseWardsArray);
  return reverseWardsArray.join(' ');
}

// console.log(reverseWords('pratibhakumar'))
console.log(reverseWords(`hi how r u`));