let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

// when type and value are the same
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// none of these are needed, all are covered by type inferences

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [4, 12, 0, 7];
let truths: boolean[] = [true, false, true];

// Classes - annotate the class name, not class
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// if variable and initialization are on the same line/one single expression, TS will figure out the type for us
// use type inference whenever possible

// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
// avoid 'any' types at all costs

// 2) When you initialize separately from declaration
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When you want a variable to have a type that can't be easily inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
