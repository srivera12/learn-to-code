function steps(n: number) {
  // check input is a number
  if (typeof n !== 'number') {
    throw new Error('input must be a number');
  }

  // creating string, set number of characters (including spaces) each time - n
  // increment number of '#'s and decrement number of ' 's each time - total remains the same
  //  while loop - up to and equaling n, i number of '#' each time, n - i number of ' ' each time
  let i: number = 1;
  while (i <= n) {
    //   create array with length n
    let step: string[] = Array(n);
    // fill with i number of '#'
    step.fill('#', 0, i);
    // fill with ' ', start at i and end with n
    step.fill(' ', i, n);
    console.log(step.join(''));
    i++;
  }
}

// // RECURSIVE SOLUTION FROM INSTRUCTOR
// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   steps(n, row, stair);
// }
