alert("This is an alert! You have been alerted!");
console.log("This is a log! You have been logged!");

const welcome =
  "This is a welcome message hidden in a variable. It's like a message in a bottle. Congrats!";
alert(welcome);

let myAge = 26;
// Tis an integer
let exactAge = 26.48;
// Tis a float - IDK why ask Tio
console.log("My age is " + myAge);

myAge++;
console.log("My age next year will be " + myAge);

function printName(name, age) {
  console.log("Hello,", name, "you are", age);
}

printName("Shera", "25");
printName("Catra", "25");

let btn = document.getElementById("go-button");
function buttonClick() {
  console.log("Button clicked!");
  let customText = document.getElementsByClassName("my-input");
  let textarea = document.getElementsByClassName("my-textarea");

  let results = document.getElementById("text");
  results.innerHTML = "Hello, " + customText[0].value + "! <br/>";
  results.innerHTML += "You submitted: " + textarea[0].value;
}
btn.addEventListener("click", buttonClick);

let hobbies = ["pizza", "gaming", "reading", "programming", "music"];
console.log("I no longer enjoy " + hobbies.pop());

hobbies.push("tea");
console.log(hobbies.shift());
console.log(hobbies.unshift("learning new things"));

hobbies.forEach(function (item, index) {
  console.log("I like", item, index);
});

let indexNum = hobbies.indexOf("reading");
hobbies.splice(indexNum, 1);
hobbies.splice(1, 2);

hobbies.forEach(function (item, index) {
  console.log("I like", item, index);
});

if (hobbies.indexOf("tea") > -1) {
  console.log("I like to drink tea.");
} else {
  console.log("I like to drink coffee.");
}
if (hobbies.indexOf("sports") === -1) {
  console.log("I don't like to play sports.");
}

function saySomething(phrase) {
  console.log("You said: " + phrase);
}

function getPhrase(phrase, another) {
  // Why can't we just return phrase.length? Why do we need to define the variable? 
  // I tried it and it worked.
  // Nevermind, I see the greated control when we added an additional parameter.
  let l = phrase.length;
  if (typeof another !== "undefined") {
    l += another.length
  }
  return l;
  // This doesn't work for me - just prints the function. Seemed to work for him
  // function printBoth() {
  //   return phrase + " " + another;
  // }
  // return printBoth;

  // This is what worked for me:
  function printBoth() {
    console.log (phrase + " " + another)
  }
  printBoth();
  // I figured it out, it can't do both. More nonsense of this guy reusing code to do new things
  // instead of just writing somethng new. Face palm.
}

saySomething("Hello, how are you?");

const p = "This is a phrase.";
saySomething(p);

let p1 = "This is a slightly longer sentence."
let p2 = "This is a shorter sentence."
let computed = getPhrase(p1, p2);
console.log(computed);
// Why can't we just put the console.log as another line in the getPhraseLength function?
