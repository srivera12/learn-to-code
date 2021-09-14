// create an algorithm to determine if a tring is made of all unique characters
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

// create an algorithm to determine if two strings are permutations of each other
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
