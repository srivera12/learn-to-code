function pyramid(n: number) {
  // check if input is not integer
  if (typeof n !== 'number') {
    throw new Error('input must be a number');
  }

  // n is number of levels of the pyramid
  // length of string is static, but dependent on number of levels - relationship is length = n + (n - 1)
  // number of '#' is odd: 1, 3, 5... etc., final number of '#' is length of string
  // number of ' ' is even, and decreases: ...4, 2, 0
  const pyramidLength: number = n + (n - 1);
  let i: number = 1;
  while (i <= n) {
    // create array of the correct length
    let level: string[] = Array(pyramidLength);
    // fill with ' '
    level.fill(' ');
    // adding the '#' - indices from sketching out the pattern
    level.fill('#', n - i, n + (i - 1));
    console.log(level.join(''));
    i++;
  }
}
