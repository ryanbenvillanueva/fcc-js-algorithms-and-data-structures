// Intermediate Algorithm Scripting: Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// sumPrimes(10)should return a number.
// sumPrimes(10)should return 17.
// sumPrimes(977)should return 73156.

function sumPrimes(num) {
    let primeNums = [];
    let sum = 0;
    for (let i = 2; i <= num + 2; i++) {
        primeNums.push(true);
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (primeNums[i]) {
            for (let j = i * i; j <= num; j+=i) {
                primeNums[j] = false;
            }
        }
    }
    
    for (let k = 2; k <= primeNums.length; k++) {
        if (primeNums[k] === true) {
            sum += k;
        }
    }
    return sum;
}

sumPrimes(977);