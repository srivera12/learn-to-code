// show when var works that let does not, due to block scope
var testV = "var test";
console.log(testV);
if (true) {
  var testV = "var tested";
}
console.log(testV);
let testL = "let test";
console.log(testL);
if (true) {
  let testL = "let tested";
}
console.log(testL);

// rewrite the function in arrow function syntax, with both the concise body and the block body
let func1 = function () {
  return "Hi";
};
let func2 = () => "Hi";
let func3 = () => {
  return "Hi";
};

// create 2 more arrow function, one with no parameters and the other with two or more parameters
let test = () => "Test successful";
let meal = (food, beverage, dessert) => {
  console.log(
    `This ${food}, ${beverage}, and ${dessert} make a delicious meal!`
  );
};

const numbers = [2, 4, 6, 8];
const es5squared = numbers.map(function (n) {
  return n * n;
});
console.log(es5squared);
const es6squared = numbers.map((n) => n * n);
console.log(es6squared);

// create 2 arrays and turn them in on array, using es5 and again using the es6 spread operator
const es5food = ["bagels", "pie", "chicken tenders", "pasta", "burrito bowls"];
const es5liquids = ["coffee", "tea", "milkshakes", "unusual sodas"];
const es5tasty = es5food.concat(es5liquids);
console.log(es5tasty);
const es6liquids = ["coffee", "tea", "milkshakes", "unusual sodas"];
const es6tasty = [
  "bagels",
  "pie",
  "chicken tenders",
  "pasta",
  "burrito bowls",
  ...es6liquids,
];
console.log(es6tasty);

// create a function with 3 parameters, then pass in an array with 3 elements using the spread operator
// then pass the arguments to a template string and return the template string
const books = (book1, book2, book3) => {
  console.log(`I'm currently reading ${book1}, ${book2}, and ${book3}.`);
};
const myBooks = ["Code", "Old Path White Clouds", "The House in the Cerulean Sea"];
books(...myBooks);
