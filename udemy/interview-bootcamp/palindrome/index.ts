function palindrome(str: string) {
  // palindrome - same forward and backward
  // check if string - need to check/error case for non-alphabet characters
  if (typeof str !== 'string') {
    throw new Error('input must be string');
  }
  // reverse the string - either split, reverse, join or for loop then join
  // compare reversed string to original
  // must return boolean not string itself

  // // OPTION 1
  // let reverseStr = [];
  // for (let character of str) {
  //   reverseStr.push(character);
  // }
  //  reverseStr = reverseStr.join('');
  //  return str === reverseStr;

  // // OPTION 2
  //   const reverseStr = str.split('').reverse().join('');
  //   return str === reverseStr;

  // OPTION 3
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    // check if str[i] DOES NOT match its counterpart, then return, otherwise continue
    if (str[i] !== str[str.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}
