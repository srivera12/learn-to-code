function maxChar(str) {
  // make object with each character and the number of times it is present
  // iterate over string, check for key of character, either make key or increment key if present
  // find max value and its key, return max key
  const letterAmounts = {};
  for (let i = 0; i < str.length; i++) {
    if (!letterAmounts[str[i]]) {
      letterAmounts[str[i]] = 1;
    } else {
      letterAmounts[str[i]]++;
    }
  }
  const values = Object.values(letterAmounts);
  const mostFreq = Object.keys(letterAmounts)[values.indexOf(Math.max(...values))];
  return mostFreq;
}

module.exports = maxChar;
