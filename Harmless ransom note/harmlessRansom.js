function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};
  // console.log(noteArr);
  for (let i = 0; i < magazineArr.length; i++) {
    if (magazineObj[magazineArr[i]]) {
      magazineObj[magazineArr[i]]++;
    } else {
      magazineObj[magazineArr[i]] = 1;
    }
  }
  let noteIsPossible = true;
  // for (let j = 0; j < noteArr.length; j++) {
  //   if (magazineObj[noteArr[j]]) {
  //     magazineObj[noteArr[j]]--;
  //     if (magazineObj[noteArr[j]] < 0) {
  //       return (noteIsPossible = false);
  //     }
  //   } else {
  //     return (noteIsPossible = false);
  //   }
  // }
  // magazineArr.forEach((word) => {
  //   if (!magazineObj[word]) {
  //     magazineObj[word] = 1;
  //   } else {
  //     magazineObj[word]++;
  //   }
  // });
  noteArr.forEach((word) => {
    if (!magazineObj[word]) {
      noteIsPossible = false;
    } else {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    }
  });
  return noteIsPossible;
}

const newLocal = "actually its lksdkl sajfldsads lkjsfd magazine";
harmlessRansomNote(
  newLocal,
  "this is all the magazine text in the magazine lkdsa lksafjd lkfdj oiewask jdsafoiew kfdsajd lkjsfd"
);
