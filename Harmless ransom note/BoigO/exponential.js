function addAndLog(array){
  for (let i = 0; i < array.length; i++) {
    for(let j=0; i<array.length; i++){
      console.log(array[i] + array[j]);
    }
  }
}
addAndLog(['A','B','C']);
addAndLog(['A','B','C','D']);