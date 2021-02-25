const randomURL = "http://quote-garden.herokuapp.com/api/v3/quotes/random";
const genreBaseURL = "https://quote-garden.herokuapp.com/api/v3/quotes/?genre=";
const authorBaseURL = "https://quote-garden.herokuapp.com/api/v3/quotes/?author=";
const endURL = "&page=1&limit=100";

getRandomQuote(); //Just to get something at the beginning

let currentGenre = "uninitialized"; //will get changed with each response
let currentAuthor = "A Person"; //will change each time

document.getElementById("randomButton").addEventListener("click", function (event) {
    event.preventDefault();
    getRandomQuote();
})

document.getElementById("genreButton").addEventListener("click", function (event) {
    event.preventDefault();
    getGenreQuote();
})

document.getElementById("authorButton").addEventListener("click", function (event) {
    event.preventDefault();
    getAuthorQuote();
})

function getRandomQuote() {
    fetch(randomURL)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            handleResonse(json);
        })
}

function getGenreQuote() {
    let url = genreBaseURL + currentGenre;
    console.log(currentGenre);
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            handleResonse(json);
        })
}

function getAuthorQuote() {
    let url = authorBaseURL + currentAuthor + endURL;
    console.log(currentAuthor);
    fetch(url)
      .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            console.log("authorQuote");
            handleResonse(json);
        })
}

function handleResonse(json) {
  let index = Math.floor(Math.random() * json.data.length);
  console.log(json);
    document.getElementById("quoteText").textContent = "\"" + json.data[index].quoteText + "\"";
    document.getElementById("quoteAuthor").textContent = "-" + json.data[index].quoteAuthor;
    currentGenre = json.data[index].quoteGenre;
    currentAuthor = json.data[index].quoteAuthor;
}
