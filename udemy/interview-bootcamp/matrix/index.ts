function matrix(n: number) {
  // confirm input is a number
  if (typeof n !== 'number') {
    throw new Error('input must be a number');
  }
  // make the matrix
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }
  //   counter variable for the values placed in array and variables for constants for starting and ending column and row
  let counter: number = 1;
  let startRow: number = 0;
  let startCol: number = 0;
  let endCol: number = n - 1;
  let endRow: number = n - 1;
  //   end condition: starting and ending row and column are the same (last value placed)
  while (startCol <= endCol && startRow <= endRow) {
    //   going horizontally across top row and incrementing 'top' for next loop
    for (let col = startCol; col <= endCol; col++) {
      matrix[startRow][col] = counter;
      counter++;
    }
    startRow++;
    // going down the side and decrementing end column for next loop
    for (let row = startRow; row <= endRow; row++) {
      matrix[row][endCol] = counter;
      counter++;
    }
    endCol--;
    // going across the bottom and decrementing end row for next loop
    for (let col = endCol; col >= startCol; col--) {
      matrix[endRow][col] = counter;
      counter++;
    }
    endRow--;
    // going back up to the new top and incrementing start column for next loop
    for (let row = endRow; row >= startRow; row--) {
      matrix[row][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return matrix;
}
