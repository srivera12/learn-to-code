// make an array of sports teams, then add one to the end, then turn a team into a new
// team, then save your favorite team in a variable, then access the length of the array
const basketballTeams = ["Knicks", "Nets", "Nuggets", "Wizards", "Magic"];
console.log(basketballTeams);
basketballTeams[5] = "Warriors";
console.log(basketballTeams);
basketballTeams[0] = "Heat";
console.log(basketballTeams);
const myFavoriteTeam = basketballTeams[3];
console.log(myFavoriteTeam);
console.log(basketballTeams.length);

// make an array called shoppingList, insert crackers in front and grapes at the end
const shoppingList = ["pizza", "milk", "apples", "ice cream", "chicken"];
shoppingList.unshift("crackers");
shoppingList.push("grapes");
console.log(shoppingList);

// now remove the first and last items form the array
shoppingList.shift();
shoppingList.pop();
console.log(shoppingList);

// capture shift and pop methods
const firstItemSarah = shoppingList.shift();
console.log(firstItemSarah);
const lastItemPhil = shoppingList.pop();
console.log(lastItemPhil);

// create two color arrays and add them together
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const extraColors = ["pink", "grey", "black", "brown", "purple", "turquoise", "lavender"];
const allColors = colors.concat(extraColors);
console.log(allColors);

// create reverseAllColors and alphaAllColors
const reverseAllColors = allColors.reverse();
console.log(reverseAllColors);
const alphaAllColors = allColors.sort();
console.log(alphaAllColors);

// use the weather array to create a winter array and a summer array
const weather = ["rainy", "cold", "chilly", "snowy", "cloudy", "hot", "warm", "humid"];
const winter = weather.slice(0, 5);
console.log(winter);
const summer = weather.slice(5);
console.log(summer);

// do the same thing, but use negative numbers as arguments
const negWinter = weather.slice(-8, -3);
console.log(negWinter);
const negSummer = weather.slice(-3);
console.log(negSummer);




// SECTION REVIEW/QUIZ: ARRAYS


// which option will create an array? 
// b. const array = [];
// d. const array = [1, 2, 3, 4, 5];

// how do we access the name Charlie in the array? option c:
const pets = ["Max", "Oscar", "Charlie", "Sam"];
pets[2];

// given the following array how would we remove an item from the end and from the beginning?
const numbers = [2, 3, 4, 6, 7];
// d. numbers.pop();
// b. numbers.shift();

// given the following array how would we remove the first element and add a new element to the front?
const namesArr = ["John", "Michael", "Sarah", "Alex"];
// a. namesArr.shift();
// c. namesArr.unshift("Joe");

// which option will unite the men and women arrays?
// a. const ladiesFirst = women.concat(men); AND d. const menFirst = men.concat(women);
// which option will put men before women?
// d.
// which option will put women before men?
// a.
// which option will add pets to the end?
// const all = women.concat(men, pets);

// what method will reverse the order of the array?
const royGBiv = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// b. royGBiv.reverse();
// what method will place them in alphabetical order?
// e. royGBiv.sort();

// which implementation of the slice method will return red, orange, and yellow?
// a. royGBiv.slice(0, 3); AND e. royGBiv.slice(-7, 3);

// use slice to return green through violet
// b. royGBiv.slice(3); AND e. royGBiv.slice(-4);