function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};
  // console.log(noteArr);
  // for (let i = 0; i < magazineArr.length; i++) {
  //   if (magazineObj[magazineArr[i]]) {
  //     magazineObj[magazineArr[i]]++;
  //   } else {
  //     magazineObj[magazineArr[i]] = 1;
  //   }
  // }

  // for (let i = 0; i < noteArr.length; i++) {
  //   if (magazineObj[noteArr[i]]) {
  //     magazineObj[noteArr[i]]--;
  //     if (magazineObj[noteArr[i]] < 0) {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 1;
    } else {
      magazineObj[word]++;
    }
  });

  noteArr.forEach((word) => {
    if (!magazineObj[word]) {
      return false;
    } else {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        return false;
      }
    }
  });
  return true;
}

const newLocal = "actually its lksdkl sajfldsads  this ";
const func = harmlessRansomNote(
  newLocal,
  "this is all the magazine text in the lkdsa lksafjd lkfdj oiewask jdsafoiew kfdsajd lkjsfd"
);
console.log(func);
