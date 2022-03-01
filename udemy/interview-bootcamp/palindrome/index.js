function palindrome(str) {
  // palindrome - same forward and backward
  // check if string - need to check/error case for non-alphabet characters?
  // reverse the string - either split, reverse, join or for loop then join
  // compare reversed string to original

  // // OPTION 1
  // let reverseStr = [];
  // for (let character of str) {
  //   reverseStr.push(str[i]);
  // }
  // reverseStr = reverseStr.join('');

  // // OPTION 2
  //   const reverseStr = str.split('').reverse().join('');
  //   return str === reverseStr;

  // OPTION 3
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    return str[i] === str[str.length - (1 + i)];
  }
}

module.exports = palindrome;
