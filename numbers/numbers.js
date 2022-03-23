const guessesRemainingElement = document.getElementById('guesses');
const userInput = document.getElementById('user-guess');
const button = document.getElementById('button');
const feedback = document.getElementById('feedback');


// initialize remainingGuesses to 3
// initialize a random number [1,10]
const randomNum = Math.ceil(Math.random() * 10);
  // console.log(randomNum);

// add an event listener to the button
button.addEventListener('click', ()=>{
  if (remainingGuesses === 0) return;
  // get the value of the user input
  const userGuess = Number(userInput.value);
  // if userInput = random number, 
  if (userGuess === randomNum) {
  //  change feedback textcontent to "yay you won"
    feedback.textContent = 'Yay you won!';
  } else if (userGuess > randomNum) {
  //  else if userInput is too high
  //  change feedback textContent to "too high, try again"
    feedback.textContent = 'Too high :( try again!';
    // decrement remainingGuesses
    remainingGuesses--;
    // update the DOM element
    guessesRemainingElement.textContext = remainingGuesses;
  } else {
    feedback.textContext = 'Too low :( try again!';
    // decrement remainingGuesses
    remainingGuesses--;
  }
  //  change feedback textContent to "too high "
  //  change feedback textContent to "too low, guess higher"
});
