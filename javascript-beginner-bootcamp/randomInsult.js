const randomBodyParts = ["head", "butt", "legs", "face"];
const randomAdjectives = ["stupid", "ugly", "poopy", "farty"];
const randomWords = ["director", "wood", "soup", "outcome", "negotiation"];

const randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
const randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

console.log(
  `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!!!!`
);