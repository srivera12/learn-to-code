function capitalize(str: string) {
  // check if input is a string
  if (typeof str !== 'string') {
    throw new Error('input must be a string');
  }
  // need to identify when a new word begins
  // can iterate through str, adding each to new string, if previous character is a space, toUpperCase the character

  //   //   OPTION 1
  //   const capStr: string[] = [];
  //   for (let i = 0; i < str.length; i++) {
  //     //   need to account for first letter as well
  //     if (str[i - 1] === ' ' || i === 0) {
  //       // then don't need to worry about doubling issue
  //       capStr.push(str[i].toUpperCase());
  //     } else {
  //       capStr.push(str[i]);
  //     }
  //   }
  //   return capStr.join('');

  //   OPTION 2 - with .map()
  return str
    .split('')
    .map((letter, i) => (str.split('')[i - 1] === ' ' || i === 0 ? str.split('')[i].toUpperCase() : letter))
    .join('');
}
