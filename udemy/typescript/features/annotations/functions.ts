// no type inference on arguments - will always need to add it
// type inference will work on the return, but you may need to annotate it at times
const add = (a: number, b: number): number => {
  return a + b;
};

// why you need to annotate arguments
const subtract = (a, b) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// returning null/void
const logger = (message: string): void => {
  console.log(message);
};

// never - the function will never be completed
const throwError = (message: string): never => {
  throw new Error(message);
};

// without destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(todaysWeather);
// with destructuring
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
logWeather2(todaysWeather);
