// re-writing incorrectly named variables
const pet1 = "bear";
const baseballTeam = "Dodgers";
const favoriteDayOfTheWeek = "Friday";
const favoriteColor = "green";
const transportation = "car";

// rewriting into valid strings
const animal = "horse";
const answer = "false";

// rewrite to remove errors from mixing quotes
const greeting1 = 'Sam says, "hi."';
const greeting2 = "It's great to see you!";

// rewrite using the escape character and /n to break up the line
const greeting3 =
  "Don't forget to grab the newspaper on your way out.\n You are going to be on the bus for a long time\n becuase of traffic.";
console.log(greeting3);

// practice using length property and toUpperCase()
console.log(greeting3.length);
console.log(greeting3.toUpperCase());

// build your name with strings
const fname = "Sarah";
const mname = "Kathleen";
const lname = "Rivera";
console.log(fname + " " + mname + " " + lname);

// arithmatic operands examples
// const addition = 4 + 5 = 9;
// const subtraction = 3 - 1 = 2;
// const mult = 6 * 8 = 48;
// const div = 21 % 7 = 3;
// const modulus = 15 % 4 = 3;

// use assignment operators to make these more concise
let w = 20;
console.log((w += 5));
console.log((w -= 5));
console.log((w *= 5));
console.log((w %= 5));

// use correct comparison operators to make the comparisons true
let x = 12;
let y = "12";
let z = 14;
// x == y is true already
// x === y will be false, should be x !== y to be true
// x == z is false, should be != to be true

// string concatenation practice
const greeting = "Hello,";
const angryAtGuest = "get out of my house!";
const happyAtGuest = "thanks for coming over!";
const happyGreeting = greeting + " " + happyAtGuest;
console.log(happyGreeting);
const angryGreeting = greeting + " " + angryAtGuest;
console.log(angryGreeting);




// SECTION REVIEW/QUIZ: JAVASCRIPT BUILDING BLOCKS


// proper way to declare a variable (even if it is var) is b:
var color = "blue";
// a and d also work: color = "blue" and var color

// best practices naming variables: c and e
const milesIDroveToday = 35;
const myFavoriteColor = "red";
// bad practices for naming variables: a, b, and d(unless context makes it make sense)
const milesidrovetoday = 35;
const MilesIDroveToday = 35;
var t = "red";

// find the invalid variable names
// a. const 1dog = "Rover"; - can't start with a number
// c. const function = function(){//code block}; - can't use reserved words
// e. const facebook Name = "Sam"; - can't use spaces
// g. const run&eat = "energy gel"; - can't use special characters like &

// which strings are invalid?
// b. const string = 'I am a string";
// c. const string = "I am a string';

// which strings are invalid?
// a. const string1 = 'Hey, what's up?';
// d. const string4 = ""It is almost noon", John answered";

// which property measures length and which turns a string into uppercase?
// f:
greeting.length;
// b:
greeting.toUpperCase();

// true or false?
// true: 
// b: ++x; //8
// d: x--; //7
// false:
// a: x++; //8
// c: --x; //7

// what will the modulus operators return?
34 % 9; //7
12 % 4; //0
9 % 2; //1
15 % 4 //3

// true or false?
// true:
// a. 8 == "8";
// d. 8 !== "8";
// false:
// b. 8 === "8";
// c. 8 != "8";