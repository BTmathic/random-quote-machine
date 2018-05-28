import 'normalize.css/normalize.css'; // reset all browser conventions
import './styles/styles.scss';

let quotes = [];
main();

function main() {
  quotes = getQuotes();
  document.getElementById('new-quote-button').addEventListener('click', () => {
    setQuote();
  });
}

function getQuotes() {
  fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20&')
    .then(
      (response) => {
        response.json().then((data) => {
          quotes = data;
          setQuote();
          setColour();
        });
      }
    );
}

function setQuote() {
  setColour();
  setQuote();
}

function setColour() {
  let newColour = '#';
  for (let i = 0; i < 6; i++) {
    newColour = newColour.concat(Math.floor(Math.random() * 10));
  }
  document.body.style.backgroundColor = newColour;
  document.getElementById('twitter-icon').style.backgroundColor = newColour;
  document.getElementById('text').style.color = newColour;
  document.getElementById('author').style.color = newColour;
  document.getElementById('new-quote-button').style.color = newColour;
  document.getElementById('new-quote-button').style.border = '2px solid ' + newColour;
}

function setQuote() {
  const nextQuote = Math.floor(Math.random() * quotes.length);
  const quote = quotes[nextQuote].content;
  const author = quotes[nextQuote].title;
  document.getElementById('text').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
  document.getElementById('tweet-quote').href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.slice(3,quote.length-5) + '" ') + author;  
}