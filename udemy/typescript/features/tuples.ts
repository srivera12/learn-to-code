// looks very similar to arrays, but contains the values of an object without the keys

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// tuple annotation syntax
const pepsi: [string, boolean, number] = ['brown', true, 40];

// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuples aren't very useful
const carSpecs: [number, number] = [400, 3354];
const carStats: { horsepower: number; weight: number } = {
  horsepower: 400,
  weight: 3354,
};
