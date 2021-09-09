const randomBodyParts = ["head", "butt", "legs", "face"];
const randomAdjectives = ["stupid", "ugly", "poopy", "farty"];
const randomWords = ["director", "wood", "soup", "outcome", "negotiation"];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
const randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log(
  "Your " +
    randomBodyPart +
    " is like a " +
    randomAdjective +
    " " +
    randomWord +
    "!!!!"
);
