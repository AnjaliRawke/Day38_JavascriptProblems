const prompt = require('prompt-sync')();

function isPrime(num) {
    if (num < 2) {
      return false;
    }
  
    if (num === 2) {
      return true;
    }
  
    if (num % 2 === 0) {
      return false;
    }
  
    // Check if the number is divisible by any odd number up to its square root
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Get the palindrome of a number
  function getPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return parseInt(reversedStr);
  }
  
  // Get a number from the user
  const num = parseInt(prompt('Enter a number:'));
  
  if (isPrime(num)) {

    const palindrome = getPalindrome(num);
  
    // Check if the palindrome is also prime
    if (isPrime(palindrome)) {
      console.log(`${num} is prime, and its palindrome ${palindrome} is also prime`);
    } else {
      console.log(`${num} is prime, but its palindrome ${palindrome} is not prime`);
    }
  } else {
    console.log(`${num} is not prime`);
  }
  