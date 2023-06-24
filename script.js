//your JS code here. If required.

const quoteElement = document.querySelector('.quote-display');
const inputElement = document.getElementById('quoteInput');
const timerElement = document.querySelector('.timer');

let startTime;
let timerInterval;


function fetchRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.content;
      quoteElement.textContent = quote;
    })
    .catch(error => {
      console.log('Error fetching quote:', error);
    });
}

// Function to start the timer
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer display
function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  timerElement.textContent = `Time: ${elapsedTime} seconds`;
}

// Function to check typing accuracy
function checkTyping() {
  const quote = quoteElement.textContent.trim();
  const typedText = inputElement.value.trim();

  if (typedText === quote) {
    clearInterval(timerInterval);
    setTimeout(fetchRandomQuote, 3000);
  }
}

// Event listener for input changes
inputElement.addEventListener('input', checkTyping);

// Fetch a random quote when the page loads
fetchRandomQuote();





