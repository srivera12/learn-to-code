// create an algorithm that will repeat a string a certain number of times
function repeatString(str, num) {
  let finalString = str;
  if (num <= 0) {
    finalString = "";
  } else {
    for (let i = 1; i < num; i++) {
      finalString = finalString + str;
    }
  }
  console.log(finalString);
}
repeatString("car", 3);
// then we tried again, this time with a while loop
function repeatStringWhile(str, num) {
  let finalString = "";
  if (num <= 0) {
    finalString += str;
  } else {
    while (num > 0) {
      finalString += str;
      num--;
    }
  }
  console.log(finalString);
}
repeatStringWhile("car", 3);

// create an algorithm that removes odd numbers from an array using the filter method
function evensOnly(arr) {
  const evensOnly = arr.filter(function (num) {
    return num % 2 === 0;
  });
  console.log(evensOnly);
}
evensOnly([3, 5, 6, 2, 1, 8, 11, 10]);
// we did this again, with a for loop and .push()
function evensOnlyLoop(arr) {
    const evensOnly = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evensOnly.push(arr[i]);
        }
    }
    console.log(evensOnly);
  }
  evensOnly([3, 5, 6, 2, 1, 8, 11, 10]);

// create an algorithm that checks if a string is a palindrome 
function palindromeCheck(str) {
  const testStr = str.replace(/\W/g, "").toLowerCase();
  const reverseTestStr = testStr.split("").reverse().join("");
  if (testStr === reverseTestStr) {
    console.log("This string is a palindrome.");
  } else {
    console.log("This string is not a palindrome.");
  }
}
palindromeCheck("step on no pets");

// create an algorithm that will give the sum of a range of numbers between two values
function sumOfRange(arr) {
  const largeNum = Math.max(...arr);
  const smallNum = Math.min(...arr);
  let sumNum = 0;
  for (let i = smallNum; i <= largeNum; i++) {
    sumNum += i;
  }
  console.log(sumNum);
}
sumOfRange([5, 1]);

//create an algorithm to remove elements from the front of the array
function removeHead(arr, num) {
    const end = arr.length - num;
    const cut = arr.splice(num, end);
    console.log(cut);
}
removeHead(["Red", "Orange", "Yellow", "Green", "Blue", "Purple"], 3);

// create an algorithm that will swap the order of two provided strings
function wordSwap(str) {
    const swap = str.split(" ").reverse().join(" ");
    console.log(swap);
}
wordSwap("Sarah Rivera");
// then again, but reversing the letters rather than the words
function letterReverse(str) {
    const reverse = str.split("").reverse().join("");
    console.log(reverse);
}
letterReverse("sarah");
// then again with a for loop
function letterReverseFor(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--){
        reverse += str[i]
    }
    console.log(reverse);
}
letterReverseFor("sarah");

// create an algorithm that will filter out all of the strings of an array and return only numbers
function noStrings(arr) {
    const numbersOnly = arr.filter(function (element) {
        return typeof element === "number"
    })
    console.log(numbersOnly);
}
noStrings([3, "hello", 90, "whatup", 42, "blah", 28, "blah blah", 101, "blah blah blah"]);
// other than confirming typeOf syntax, no issues
// dude also uses for loop, if statement, and .push instead of the filter
// and again with arrow functions
function noStringsArrow(arr) {
    const numbersOnly = arr.filter(element => typeof element === "number")
    console.log(numbersOnly);
}
noStringsArrow([3, "hello", 90, "whatup", 42, "blah", 28, "blah blah", 101, "blah blah blah"]);
// just needed to remind of syntax
