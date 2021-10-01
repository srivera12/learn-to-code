// make an object using literal notation that is a person with 3 keys:
// a string, boolean, and number
const person = { name: "Jerry", human: true, age: 47 };
console.log(person);

// make an object and use dot notation to add 4 properties and their values:
const lunch = {};
lunch.time = 12;
lunch.drink = "soda";
lunch.food = "pizza, breadstick, cheesecake";
lunch.tasty = true;
console.log(lunch);

// make an object and add properties with bracket notation
const cup = {};
cup["holdsLiquid"] = true;
cup["color"] = "blue";
cup["volume"] = 20;
console.log(cup);

// access all the properties of the snowman
const snowman = {
  isSnow: true,
  color: "white",
  madeOfSnowballs: 3,
  "full name": "Frosty",
};
console.log(snowman.isSnow);
console.log(snowman.color);
console.log(snowman.madeOfSnowballs);
console.log(snowman["full name"]);

// change snowman's property values
snowman.isSnow = "yes";
snowman.color = "orange";
snowman.madeOfSnowballs = 8;
snowman["full name"] = "Jack Frost";
console.log(snowman);

// build a house, add 4 property values in dot notation and 3 value types,
// then add 3 property values with bracket notation that can't be added with dot notation
const house = {};
house.color = "blue";
house.bedrooms = 4;
house.bathrooms = 5;
house.occupied = true;
house["street address"] = "123 ABC Street";
house["function"] = "place to live";
house["3rd floor"] = "attic";
console.log(house);

// make a home constructor function and make 3 homes
function Home(rooms, apartment, color, swimmingPool, state, city) {
  this.rooms = rooms;
  this.apartment = apartment;
  this.color = color;
  this.swimmingPool = swimmingPool;
  this.state = state;
  this.city = city;
}
const home1 = new Home(2, true, "green", false, "VA", "Richmond");
const home2 = new Home(5, false, "white", true, "FL", "Miami");
const home3 = new Home(4, false, "purple", false, "CO", "Boulder");

// make a book in object literal notation, then a book constructor function and make 5 books
const book = {
  title: "The Wind in the Oaks",
  pageCount: 572,
  coverColor: "green",
  checkedOut: false,
};
function Book(title, pageCount, coverColor, checkedOut) {
  this.title = title;
  this.pageCount = pageCount;
  this.coverColor = coverColor;
  this.checkedOut = checkedOut;
}
const book1 = new Book("Pride and Pestilence", 898, "pink", true);
const book2 = new Book("Moby Dad", 1125, "dark blue", false);
const book3 = new Book("The Great Ghastly", 346, "purple", true);
const book4 = new Book("Lord of the Fries", 479, "yellow", false);
const book5 = new Book("The Little Quince", 223, "light green", true);
