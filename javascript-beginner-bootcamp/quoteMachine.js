// clicking the button
const quoteButton = document.querySelector(".new-quote-button");
quoteButton.addEventListener("click", newQuote);

// connecting to the API
const endpoint = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
function newQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.quotes[0].text);
      displayQuoter(data.quotes[0].author);
    })
    .catch(function () {
      alert("An error occurred");
    });
}

// displaying quote and author
function displayQuote(quote) {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;
}
function displayQuoter(quoter) {
  const quoterText = document.querySelector(".quoter");
  quoterText.textContent = quoter;
}

// pre-populate quote on load
newQuote();
