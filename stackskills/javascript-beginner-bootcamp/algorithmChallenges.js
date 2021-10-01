// create an algorithm to determine if a string is made of all unique characters
function uniqueString(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      console.log("This string is not unique.");
      return false;
    }
  }
  console.log("This string is unique.");
}
uniqueString("cat");

// create an algorithm to identify the longest word in a string
function longestWord(string) {
  const words = string.split(" ");
  let maxWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
      maxWord = words[i];
    }
  }
  console.log(maxWord);
}
longestWord("is this the longest word here");
// now make it so special characters like punctuation isn't counted
function longestWordNoSpecial(string) {
  let words = string.replace(/\W/g, " ").split(" ");
  // replaced with a space because otherwise spaces were removed and .split wasn't possible, but
  // that makes a bunch of extra strings. Is there a better way? (dude did this as well)
  let maxWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
      maxWord = words[i];
    }
  }
  console.log(`The longest word is ${maxWord}, and it is ${maxWord.length} characters long.`);
}
longestWordNoSpecial("is this the longest word here?????");
// now again, but with a for of loop
function longestWordForOf(string) {
  let words = string.replace(/\W/g, " ").split(" ");
  let maxWord = "";
  for (const word of words) {
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }
  console.log(`The longest word is ${maxWord}, and it is ${maxWord.length} characters long.`);
}
longestWordForOf("is this the longest word here?????");
// no real trouble with either

// create an algorithm to determine if two strings are permutations of each other - 1ST PAUSE
function stringMatch(str1, str2) {
  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");
  if (sortStr1 === sortStr2) {
    console.log("These strings are permutations of each other.");
  } else {
    console.log("These strings are unique.");
  }
}
stringMatch("night", "thing");
