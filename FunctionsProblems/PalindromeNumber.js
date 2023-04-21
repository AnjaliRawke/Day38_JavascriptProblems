function isPalindrome(num) {
    const str = num.toString();
  
    const reversedStr = str.split('').reverse().join('');
  
    if (str === reversedStr) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome(12321)); 

  