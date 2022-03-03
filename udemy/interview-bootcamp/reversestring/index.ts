function reverse(str: string) {
  // confirm input is string - error case
  if (typeof str !== 'string') {
    throw new Error('input must be string');
  }

  // turn str to array - split('')
  // reverse() then join back to string
  // OR for loop to iterate back to front, push each letter into array, join to make a string

  //   // OPTION 1
  //   const reverseStr = [];
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverseStr.push(str[i]);
  //   }
  //   return reverseStr.join('');

  // OPTION 2
  return str.split('').reverse().join('');
}
