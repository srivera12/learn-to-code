// user's choice
function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "bear" || userInput === "gun" || userInput === "human") {
    console.log("Your choice is " + userInput + ".");
    return userInput;
  } else {
    throw "The only valid choices are human, gun, or bear.";
  }
}

// computer's choice
const possibleChoices = ["gun", "human", "bear"];
function getComputerChoice() {
  const randomChoice = possibleChoices[Math.floor(Math.random() * 3)];
  console.log("The computer chose " + randomChoice + ".");
  return randomChoice;
}

// now they battle
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "You have tied, try again!";
  } else if (userChoice === "human") {
    if (computerChoice === "bear") {
      return "Bear mauls human. You lose, git gud.";
    } else {
      return "Human disarms gun. You win!";
    }
  } else if (userChoice === "bear") {
    if (computerChoice === "human") {
      return "Bear mauls human. You win!";
    } else {
      return "Gun shoots bear. You lose, git gud.";
    }
  } else {
    if (computerChoice === "human") {
      return "Human disarms gun. You lose, git gud.";
    } else {
      return "Gun shoots bear. You win!";
    }
  }
}

// pulling it all together
function playGameConsole() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Please choose bear, human, or gun: ",
    function (promptUserChoice) {
      playGame(promptUserChoice);
      rl.close();
    }
  );
}
function playGameHTML() {
  const promptUserChoice = prompt("Please choose bear, human, or gun.");
  playGame(promptUserChoice);
}
function playGame(promptUserChoice) {
  const userChoice = getUserChoice(promptUserChoice);
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

// begin!
if (typeof require === "undefined") {
  playGameHTML();
} else {
  playGameConsole();
}
