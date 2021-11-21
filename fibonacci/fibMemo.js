function fibMemo(position, cache) {
  /*
   * index: index of the number in fibonacci sequence
   * cache: an array used as memory
   * Memoization
   * check to see if number already exist in the cache
   * if number is in cache use that number
   * if number is not in cache clculate it and put it in cache so it can be
   *  used multiple times in the future.
   *
   * */
  cache = cache || [];
  // console.log(cache[position]);
//  base-case
  if (cache[position]) {
    return cache[position];
  } else {
    if (position < 3) {
      return 1;
    } else {
      cache[position] = fibMemo(position - 1, cache) +
        fibMemo(position - 2, cache);
    }
  }
  return cache[position];
}

const fibonacciMemo = fibMemo(1000);
console.log(fibonacciMemo);