let quotes = [];

function loadQuotes() {
    const storedQuotes = JSON.parse(localStorage.getItem('quotes'));
    if (storedQuotes) {
        quotes = storedQuotes;
        displayQuotes();
    }
function populateCategories() {
    const categorySet = new Set(quotes.map(quote => quote.category));
    const categoryFilter = document.getElementById('categoryFilter');

    categorySet.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}
function saveSelectedCategory(category) {
    localStorage.setItem('lastSelectedCategory', category);
}

function loadLastSelectedCategory() {
    const lastCategory = localStorage.getItem('lastSelectedCategory') || 'all';
    document.getElementById('categoryFilter').value = lastCategory;
    filterQuotes();
}
loadLastSelectedCategory();
}

function addQuote(newQuote) {
    quotes.push(newQuote);
    saveQuotes();
function addQuote(newQuote) {
    quotes.push(newQuote);
    saveQuotes();
    populateCategories();
}
}

function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function displayQuotes() {
application/json. "Blob"]}
loadQuotes("FileReader", "onload", "readAsText");
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
function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
    displayQuotes(filteredQuotes);
    saveSelectedCategory(selectedCategory);
}

function displayQuotes(quotesToDisplay) {
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
