// function missingNumber() {

// }
// What does he mean by missing number? Assuming there is a series of numbers in order?
// How else would you be able to find something that isn't there, other than assuming there's a logic to them.
// Otherwise they could be any number in a random mix.
// Egdecase: what if the array is of strings or variables? Need to make a response for that.
// ALL OF THIS IRRELEVANT - HE NEVER EXPLAINED AND INSTANTLY CANCELED THE EXERCISE

let numbers = [43, 56, 501, 100, 45, 10, 50, 34];
let words = ["Apple", "Pear", "Coconut", "Pizza", "Hamburger", "Banana"];


let exercise = [
  2, 17, 20, 5, 1, 13, 7, 3, 16, 14, 6, 19, 8, 15, 11, 9, 10, 12, 4,
];
function missingNo(exercise) {
  let missing = -1;
  const sorted = exercise.sort(function(a, b) {return a - b});
  for (let i = 1; i <= sorted.length; i++) { // O(n)
    if (sorted[i - 1] !== i) { // O(n)
      missing = i;
      break;
    }
  }
  return missing;
}

console.log(missingNo(missing));
