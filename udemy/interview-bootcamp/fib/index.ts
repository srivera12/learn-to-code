// // OPTION 1 - create series, return last value
// function fib(n: number) {
//   // check input is number
//   if (typeof n !== 'number') {
//     throw new Error('input must be a number');
//   }

//   // for loop from 0 to n, each time push in sum of previous two values (start with 0 and 1; therefore i starts at 2)
//   const fibSeq: number[] = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
//   }
//   // return most recently added value
//   return fibSeq.pop();
// }

// // OPTION 2 - recursive solution, bad run time
// function fib(n: number) {
//   // check input is number
//   if (typeof n !== 'number') {
//     throw new Error('input must be a number');
//   }
//   // end case
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// OPTION 3 - recursive solution with memoization
function memoize(fn: Function) {
  const cache = {};
  return function (arg: number) {
    if (cache[arg]) {
      return cache[arg];
    }
    const result = fn.apply(this, arg);
    cache[arg] = result;
  };
}
let fib = (n: number) => {
  // check input is number
  if (typeof n !== 'number') {
    throw new Error('input must be a number');
  }
  // end case
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
fib = memoize(fib);
// example of what to actually call
fib(5);
