// import functions

// grab DOM elements

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

console.log('hello from app.js');

let dog = 'Benny';

console.log(`My dog's name is ${dog}.`);
console.log(`${dog} is very cute.`);

const label = document.getElementById('label');
// label.textContent = 'awesome blossom';
// label.style.color = 'purple';

const darkText = document.querySelector('label');
console.log(darkText);

const button = document.getElementById('button');
button.addEventListener('click', ()=>{
    // store element w/ id email-input
    const inputs = document.getElementById('email-input');
    //add class 'hide' to inputs
    inputs.classList.toggle('hide');
    // store the element w/ id thank-you
    const thankYou = document.getElementById('thank-you');
    // remove class 'hide' from thank-you element
    thankYou.classList.toggle('hide');
});
