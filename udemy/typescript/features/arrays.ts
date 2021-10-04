// type inference
const carMakers = ['ford', 'toyota', 'chevy'];

// if you initialize as an empty array, you'll need type annotations
let drinks: string[] = [];
drinks = ['coffee', 'tea', 'soda', 'juice'];

// arrays of non-primatives
const dates = [new Date(), new Date()];

// 2-dimensional arrays
const carsByMake = [['f150'], ['corolla'], ['camero']];

// helps with inference when extracting values
const maker = carMakers[0];
const myCar = carMakers.pop();

// helps prevent adding incompatible values
// carMakers.push(100); gives error

// help with functions like 'map', 'forEach', and 'reduce'
carMakers.map((car: string): string => {
  return car;
});

// arrays can contain multiple types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
