/*
 should not require a lot of code-
 base case deals with the fact that the first two numbers are always 1 and 1;
 */
function fibonacci(position) {
  /*
   * Fibonacci is a special sequence of numbers
   * first two numbers in the sequence is 1 and 1
   * and every number after that is the sum of two previous numbers
   * Fibonacci Sequence: 1,1,2,3,5,8,13,21,34.... so on and so forth
   * */
//base-case
  if (position < 3) {
    return 1;
  } else return fibonacci(position - 1) + fibonacci(position - 2);
}

const bionic = fibonacci(40);
console.log(bionic);


const checkindex=(index)=>{
  return (index-1)+(index-2)
}
console.log(checkindex(40));