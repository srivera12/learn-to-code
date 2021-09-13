// // Working on readline
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("What is your name?  ", function (userName) {
//   if ((userName)) {
//     console.log(`Hello ${userName}!`);
//   } else {
//     console.log("Hello!");
//   }
//   rl.question("Please ask a question:  ", function (userQuestion) {
//     console.log(`${userName}, you asked: "${userQuestion}"`);
//   })
//   rl.close();
// });

// HTML METHOD
// input username
const userName = prompt("What is your name?");
// greeting
if (userName) {
  document.getElementById("name").innerText = `Hello ${userName}!`;
} else {
    document.getElementById("name").innerText = `Hello ${userName}!`;
}
// input and reference question
const userQuestion = prompt("Please ask a question!");
if (userQuestion) {
  document.getElementById("question").innerHTML = `${userName}, you asked: "${userQuestion}"`;
  // generate response
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  switch (randomNumber) {
    case (randomNumber = 0):
      eightBall = "Why would I care?";
      break;
    case (randomNumber = 1):
      eightBall = "Don't ask me, I'm just a computer.";
      break;
    case (randomNumber = 2):
      eightBall = "I guess??";
      break;
    case (randomNumber = 3):
      eightBall = "Sure, totally, 100%.";
      break;
    case (randomNumber = 4):
      eightBall = "You wish.";
      break;
    case (randomNumber = 5):
      eightBall = "Do you really need to ask?";
      break;
    case (randomNumber = 6):
      eightBall = "Shake again!";
      break;
    case (randomNumber = 7):
      eightBall = "Just stay home and watch Netflix.";
      break;
  }
  // share response
  document.getElementById("answer").innerHTML = `The Magic Eight Ball says: "${eightBall}"`;
} else {
  document.getElementById("answer").innerHTML = "Really?? No question? Stop wasting my time.";
}
