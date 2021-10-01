// This is my age
const myAge = 26;

// the first two years of a cat's life count differently then the rest
let earlyYears = 2;

// the first two years count as 25 years
earlyYears *= 25;

// we've already accounted for the first two years, so remove them
let laterYears = myAge - 2;

// each year after the first two count as 4 years
laterYears *= 4;

// now we add the first two years to the rest of the age
const myAgeInCatYears = earlyYears + laterYears;

// making a variable to store my name
const myName = "Sarah";

// here is the final complete answer:
console.log(
  "My name is " +
    myName +
    ". I am " +
    myAge +
    " years old in human years which is " +
    myAgeInCatYears +
    " years old in cat years."
);

// not part of the assignment, but I'm curious:
const shawnAge = 11;
let shawnEarlyYears = 2;
shawnEarlyYears *= 25;
let shawnLaterYears = shawnAge - 2;
shawnLaterYears *= 4;
const shawnRealAge = shawnEarlyYears + shawnLaterYears;
console.log(
  "Shawn is " +
    shawnAge +
    " years old which is actually " +
    shawnRealAge +
    " years old."
);

const linkAge = 5;
let linkEarlyYears = 2;
linkEarlyYears *= 25;
let linkLaterYears = linkAge - 2;
linkLaterYears *= 4;
const linkRealAge = linkEarlyYears + linkLaterYears;
console.log(
  "Link is " +
    linkAge +
    " years old which is actually " +
    linkRealAge +
    " years old."
);
