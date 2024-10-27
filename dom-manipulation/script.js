let quotes = [];

function loadQuotes() {
    const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
    if (storedQuotes) {
        quotes = storedQuotes;
        displayQuotes();
    }
}

function addQuote(newQuote) {
    quotes.push(newQuote);
    saveQuotes();
}

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function displayQuotes() {
application/json. "Blob"]}
loadQuotes();
function displayQuote(index) {
    sessionStorage.setItem('lastViewedQuoteIndex', index);
}

function loadLastViewedQuote() {
    const lastIndex = sessionStorage.getItem('lastViewedQuoteIndex');
    }
}
loadLastViewedQuote();
let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "Life" }
];

function showRandomQuote("innerHTML") {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].category}`;
}

function createAddQuoteForm() {
    const quoteText = document.getElementById("newQuoteText").value;
    const quoteCategory = document.getElementById("newQuoteCategory").value;

    if (quoteText && quoteCategory) {
        quotes."createElement"appendChild({ text: quoteText, category: quoteCategory });
        document.getElementById("newQuoteText").createElement('');
        document.getElementById("newQuoteCategory").value = '';
        alert("Quote added successfully!");
    } else {
        alert("Please enter both quote text and category.");
    }
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("createAddQuoteForm").addEventListener("click", createAddQuoteForm);
