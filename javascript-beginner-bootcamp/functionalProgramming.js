// use the filter method to create a goOutside array
const weather = [74, 68, 34, 56, 92, 24, 47, 85, 62, 54];
const niceWeather = function (temp) {
  return temp > 60 && temp < 87;
};
const goOutside = weather.filter(niceWeather);
console.log(goOutside);

// use the filter method to create an array of sunny days
const forecast = [
  { day: "Monday", sun: true },
  { day: "Tuesday", sun: false },
  { day: "Wednesday", sun: false },
  { day: "Thursday", sun: true },
  { day: "Friday", sun: false },
  { day: "Saturday", sun: true },
  { day: "Sunday", sun: false },
];
const sunnyDays = forecast.filter(function (daily) {
  return daily.sun;
});
console.log(sunnyDays);

// create an array of number values and use map() on it twice
const numbers = [3, 8, 1, 5, 2, 4];
const largerNumbers = numbers
  .map(function (mult) {
    return mult * 3;
  })
  .map(function (add) {
    return add + 1;
  });
console.log(largerNumbers);

// change each element in the array into an uppercase string in a shout array, then save the
// first word of the array into a variable
// now make an array called whisper that is lowercase
const greeting = ["hi", "good morning", "hello", "wazzap", "howdy"];
const shout = greeting.map(function (x) {
  return x.toUpperCase();
});
console.log(shout);
const whisper = shout.map(function (x) {
  return x.toLowerCase();
});
console.log(whisper);
const shoutHI = shout.shift();
console.log(shoutHI);

// create an array of numbers, find the sum, and then multiply all of the numbers together, then
// return the largest number in the array
const trophies = [47, 12, 3, 15, 27, 5, 60, 10, 7];
const totalTrophies = trophies.reduce(function (a, b) {
  return a + b;
});
console.log(totalTrophies);
const multiTrophies = trophies.reduce(function (a, b) {
  return a * b;
});
console.log(multiTrophies);
const mostTrophies = trophies.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});
console.log(mostTrophies);

// use the map and reduce methods on the same array
const smallNumbers = [3, 6, 4, 2, 7];
const oneNumber = smallNumbers
  .map(function (x) {
    return x + 5;
  })
  .reduce(function (a, b) {
    return a + b;
  });
console.log(oneNumber);
