// The weather today is 301 degrees Kelvin
const kelvinTemp = 301;

// Celsius is just 273.15 degrees less than Kelvin
const celsiusTemp = kelvinTemp - 273.15;

// this is how to convert Celcius into Fahrenheit
// const fahrenheitTemp = celsiusTemp * (9/5) + 32;

// this gives us the temperature in Fahrenheit in the console so we can see it
// console.log(fahrenheitTemp);

// we want a round number though, so let's use:
const fahrenheitTemp = Math.floor(celsiusTemp * (9 / 5) + 32);

// log it to the console so we can get the results, this time in a nice sentence:
console.log("The temperature is " + fahrenheitTemp + " degrees Fahrenheit.");
