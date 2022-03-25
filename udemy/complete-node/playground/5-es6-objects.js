// object property shorthand
const name = 'Sarah';
const age = 27;

user = {
  name,
  age,
  location: 'Alexandria, VA',
};

console.log(user);

// object destructuring
const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.5,
};

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;
// console.log(productLabel);
// console.log(price);
// console.log(stock);
// console.log(salePrice);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
