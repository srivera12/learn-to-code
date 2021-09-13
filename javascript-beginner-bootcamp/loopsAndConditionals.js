// change the following expressions to make them true
// from (5 > 7) to (5 < 7)
// from (7 === "7") to (7 == "7")
// from (7 === "seven") to (7 !== "seven")
// from (false) to (true)

// use && and || to make 4 different true code examples for each
3 == "3" && 4 < 5;
2 > 1 && 1 < 2;
6 === 6 && 7 < 9;
8 > 1 && 5 == "5";
3 === "3" || 4 < 5;
2 > 1 || 3 < 2;
6 === 7 || 7 < 9;
8 > 1 || 5 == "8";

// use an if, 2 else ifs, and 1 else statement, and at least one use of a logical operator
function rollForStandardDC(modifier) {
  const d20Roll = Math.ceil(Math.random() * 20);
  const totalRoll = d20Roll + modifier;
  console.log(d20Roll + " + " + modifier + " = " + totalRoll);
  if (d20Roll === 20) {
    console.log("Critical success!");
  } else if (d20Roll === 1) {
    console.log("Critical failure, you died!");
  } else if (totalRoll > 20) {
    console.log("Extreme success!");
  } else if (d20Roll >= 15 || totalRoll >= 15) {
    console.log("Strong Success!");
  } else if (d20Roll >= 10 || totalRoll >= 10) {
    console.log("Success!");
  } else {
    console.log("Failure!");
  }
}
rollForStandardDC(0);

// make a switch statement with several cases and a default
const weather = ["rainy", "cloudy", "sunny", "snowy", "windy", "foggy"];
const todayWeather = weather[Math.floor(Math.random() * weather.length)];
switch (todayWeather) {
  case "rainy":
    console.log(`It is ${todayWeather} today. Bring an umbrella!`);
    break;
  case "cloudy":
    console.log(`It is ${todayWeather} today. Look out for rain!`);
    break;
  case "sunny":
    console.log(`It is ${todayWeather} today. Don't forget your sunscreen!`);
    break;
  case "snowy":
    console.log(`It is ${todayWeather} today. Bundle up!`);
    break;
  case "windy":
    console.log(`It is ${todayWeather} today. Wear a jacket!`);
    break;
  case "foggy":
    console.log(`It is ${todayWeather} today. Be careful!`);
    break;
  default:
    console.log(`I'm not sure what weather that is.`);
    break;
}

// make a while loop that will run 5 times
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

// create a do/while loop that will run once with a false expression
const y = 5;
do {
  console.log(`${y} is less than 3.`);
} while (y < 3);

// create an array with at least 5 values, looped through a for loop, and run each element of the
// array through an if, else if, else clause with at least two options
const ps5ShowcaseGames = [
  "Bloodhunt",
  "Uncharted: Legacy of Thieves",
  "Spider-Man 2",
  "KOTOR",
  "Wolverine",
  "Deathloop",
  "Tchia",
  "Ghostwire",
  "Forsaken",
];
for (let i = 0; i < ps5ShowcaseGames.length; i++) {
  if (i > 6) {
    console.log(`I am very excited for ${ps5ShowcaseGames[i]}.`);
  } else if (i > 2) {
    console.log(`I am excited for ${ps5ShowcaseGames[i]}.`);
  } else if (i > 1) {
    console.log(`I am glad they are making ${ps5ShowcaseGames[i]}.`);
  } else {
    console.log(`I am not really excited for ${ps5ShowcaseGames[i]}.`);
  }
}
