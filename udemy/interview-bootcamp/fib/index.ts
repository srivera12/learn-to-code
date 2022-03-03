function fib(n) {
  // check input is number
  if (typeof n !== 'number') {
    throw new Error('input must be a number');
  }

  // for loop from 0 to n, each time push in sum of previous two values (start with 0 and 1; therefore i starts at 2)
  const fibSeq: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
  }
  // return most recently added value
  return fibSeq.pop();
}
