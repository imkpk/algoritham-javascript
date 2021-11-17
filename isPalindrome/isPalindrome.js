function isPalindrome(str) {
  var str = str.toLowerCase();
  var strReverse = str.split("").reverse().join("");

  console.log(strReverse);
  console.log(str);
  if (str === strReverse) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
isPalindrome("Racecar");
