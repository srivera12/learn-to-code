function vowels(str) {
  // check for string
  if (typeof str !== 'string') {
    throw new Error('input must be a string');
  }

  // //   OPTION 1 - my initial solution
  //   // need a set of vowels as a point of comparison - does not include 'y'
  //   const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  //   // iterate over list with map - increase count
  //   let count: number = 0;
  //   const strVowels = str
  //     .toLowerCase()
  //     .split('')
  //     .map((letter) => {
  //       vowels.includes(letter) && count++;
  //     });
  //   return count;

  //   OPTION 2 with regex
  return str.replace(/[aeiou]/gi, '').length;
}
