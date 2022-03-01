function reverseInt(n) {
  // need to make number into a string
  // split, reverse, join or for loop and join
  // multiply by Math.sign to account for negative/positive
  return parseInt(String(n).split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
