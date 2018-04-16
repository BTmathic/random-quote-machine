import 'normalize.css/normalize.css'; // reset all browser conventions
import './styles/styles.scss';
import $ from 'jquery';

/*
// Random quote generator. Simple page layout with two pieces of interactivity. Firstly, a button for the user to load a new quote, which changes the background colour (randomly) as well, and secondly, a button to allow the user to tweet the quote and it's author.
getQuote = () => {
    $.getJSON('https://random-quote-generator.herokuapp.com/api/quotes/random', (json) => {
      let quote = '';
      let author = '';
      if (json === {}) {
        quote = "If it's undefined, fill in the blanks.";
        author = "Careful coder";
      } else {
        quote = json.quote;
        author = json.author;
      }
      $("#quote").html("<p>" + quote + "</p>");
      $("#quote-giver").html(author);
    });
      $("#twitLink").href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + '\x22' + quote + '\x22';
  }
  
  // We want to randomly select a colour for the background, and a simple way to do this is randomly pick a hex code. However, to work well on the eyes with the white quote box, we avoid A-F to only pick between darker colours for the contrast
  setColour = () => {
    let newColour = '#';
    for (i=0; i < 6; i++) {
      newColour = newColour.concat(Math.floor(Math.random()*10));
    }
    $("body").css("background-color", newColour);
    $("#quote").css("color", newColour);
    $("#quote-giver").css("color", newColour);
    $(".well").css("background-color", newColour);
  
    var css = 'blockquote:before{ color: newColour; }';
    var style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  
  $("#new-quote").click(() => {
    setColour();
    getQuote();
  });
  
  // We want our page to be loaded with a quote initially when the user first lands here
  setColour();
  $(document).ready(getQuote());
  */