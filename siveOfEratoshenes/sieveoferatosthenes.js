function sieveOfEratosthenes(num) {
  let primes = [];
  for (let i = 0; i <= num; i++) {
    // console.log(primes[num[i]]);
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;
  const sqRt = Math.sqrt(num);

  //nested for-loop
  for (let i = 2; i < sqRt; i++) {
    for (let j = 2; j * i <= num; j++) {
      // console.log(i * j);
      primes[i * j] = false;
    }
  }
  let res = [];
  for (let i = 0; i < primes.length; i++) {
    // console.log(res[primes[i]]);
    if (primes[i]){
      res.push(i)
    }
  }
  // console.log(res);
  return res;
}

const primeNumbers = sieveOfEratosthenes(20);
console.log(primeNumbers);

// function isPrime