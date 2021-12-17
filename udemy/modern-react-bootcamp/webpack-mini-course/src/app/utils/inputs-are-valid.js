// base code from Colt Steele before code-along

export const inputsAreValid = (...input) => {
  return input.every((num) => typeof num === 'number' && !isNaN(num));
};
