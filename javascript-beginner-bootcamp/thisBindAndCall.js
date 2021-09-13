// use the bind method to make namer() work
const person1 = {
  name: "Alex",
};
const person2 = {
  name: "Alexis",
};
function namer() {
  console.log(this.name);
}
namer.bind(person1)();
namer.bind(person2)();

// use the bind method to bind number to the count function
const number = {
  x: 24,
  y: 22,
};
function count() {
  console.log(this.x + this.y);
}
count.bind(number)();

// use the call method to run the following function for each person object
const myLanguages = function (lang1, lang2, lang3) {
  console.log(
    `My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}.`
  );
};
const personX = { name: "Sally" };
const personY = { name: "Susie" };
myLanguages.call(personX, "Spanish", "French", "English");
myLanguages.call(personY, "Icelandic", "German", "Russian");