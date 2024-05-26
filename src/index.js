  function findPrimes(num) {
    const primes = [];
  
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime && num% i == 0) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  const result = findPrimes(100);
  console.log(result); 
  

module.exports = findPrimes;