// create good morning and good evening functions with parameters for name and task
function goodMorningNeighbor(neighborName) {
  console.log("Good morning, " + neighborName + "!");
}
goodMorningNeighbor("Josh");
function goodEveningNeighbor(neighborName, task) {
  console.log("Good evening, " + neighborName + ", thanks for " + task + "!");
}
goodEveningNeighbor("Sally", "helping with the gardening");

// call the following function
function knockKnock() {
  console.log("Who's there?");
}
knockKnock();

// turn the named function into an anonymous function in a variable, then call the function
const knockKnock1 = function () {
  console.log("Who's there?");
};
knockKnock1();

// turn the following declared function into an IIFE stored in a variable and then call it
function dogWalker(person, dog) {
  console.log(person + " is taking " + dog + " for a walk.");
}
dogWalker("Samantha", "Rex");
const dogWalker1 = (function (person, dog) {
  console.log(person + " is taking " + dog + " for a walk.");
})("Susie", "Jack");

// for the following function, place the variables in the global scope
const gallons = 12;
const mpg = 34;
function roadTrip() {
  console.log(gallons * mpg);
}
roadTrip();

// build a nested function that uses a variable from a parent and a variable from the global scope,
// then call the innermost function
const beverage = "Lady Grey tea";
function isItTeaTime() {
  const food = "lemon poppyseed scone";
  console.log("It's tea time!");
  function teaTime() {
    console.log("I am enjoying a " + food + " with my " + beverage + ".");
  }
  teaTime();
}
isItTeaTime();
