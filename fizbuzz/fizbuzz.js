function fizBuz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizBuz(20);

function compareSTring(str) {
  let strArr = str.split("");
  let objArr = {};
  console.log(strArr);
  for (let i = 0; i < str.length; i++) {
    if (!objArr[strArr[i]]) objArr[strArr[i]] = 1;
      objArr[strArr[i]]++;

  }
  console.log(objArr);

  // strArr.forEach((letter) => {
  //   if (!objArr[letter]) objArr[letter] = 1;
  //   objArr[letter]++;
  //
  // });

  return objArr;
}

const strng = compareSTring("xoxoxoooooojfdlksaslkadjfdafdsidf");
console.log(strng);
