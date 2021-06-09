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
  btn.removeEventListener("click", buttonClick);
  document.getElementById("text").innerHTML = "Don't do it!";
  console.log(document.getElementById("text").innerHTML);
}
btn.addEventListener("click", buttonClick);
