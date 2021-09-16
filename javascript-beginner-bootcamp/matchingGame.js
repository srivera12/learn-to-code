// possible cards, then duplicated, then randomized
const cardsArray = [
  {
    name: "CSS",
    img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true",
  },
  {
    name: "HTML",
    img: "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true",
  },
  {
    name: "jQuery",
    img: "https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true",
  },
  {
    name: "JS",
    img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true",
  },
  {
    name: "Node",
    img: "https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true",
  },
  {
    name: "Photo Shop",
    img: "https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true",
  },
  {
    name: "PHP",
    img: "https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true",
  },
  {
    name: "Python",
    img: "https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true",
  },
  {
    name: "Ruby",
    img: "https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true",
  },
  {
    name: "Sass",
    img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true",
  },
  {
    name: "Sublime",
    img: "https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true",
  },
  {
    name: "Wordpress",
    img: "https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true",
  },
];
const cardsArrayDoubled = cardsArray.concat(cardsArray);
cardsArrayDoubled.sort(function () {
  return 0.5 - Math.random();
});

// finding elements
const gameBoard = document.getElementById("game-board");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
gameBoard.appendChild(grid);

// putting images on cards
for (let i = 0; i < cardsArrayDoubled.length; i++) {
  const {img, name} = cardsArrayDoubled[i];
  // create card
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;
  //   create front of card
  const front = document.createElement("div");
  front.classList.add("front");
  //   create back of card
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${img})`;
  //   put it all together
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
}

// selecting cards, limiting to 2 picks, checking for match, removing match, resetting guess
// establishing variables
let count = 0;
let previousTarget = null;
let guess1 = "";
let guess2 = "";
const delay = 1200;
// adding .matched styling
function matched() {
  let selected = document.querySelectorAll(".selected");
  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.add("matched");
  }
}
// resetting guesses
function resetGuesses() {
  guess1 = "";
  guess2 = "";
  count = 0;
  previousTarget = null;
  let selected = document.querySelectorAll(".selected");
  for (let i = 0; i < selected.length; i++) {
    selected[i].classList.remove("selected");
  }
}
// selecting cards
grid.addEventListener("click", function (event) {
  let clicked = event.target;
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("matched")
  ) {
    return;
  }
  //   adding .selected styles
  if (count < 2) {
    count++;
    if (count === 1) {
      guess1 = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      guess2 = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
  }
  //   checking for match
  if (guess1 !== "" && guess2 !== "") {
    if (guess1 === guess2) {
      setTimeout(matched, delay);
      setTimeout(resetGuesses, delay);
    } else {
      setTimeout(resetGuesses, delay);
    }
  }
  previousTarget = clicked;
});
