/*3. Do the number guessing game tutorial starting at
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash and modify it
so that the lowest and
the highest numbers are defined as constants (and can be changed by modifying the code).*/
"use_strict";

const submit = document.querySelector('#submit'),
    answer = document.querySelector('#answer'),
    reset = document.querySelector('#reset'),
    guesses = document.querySelector('#guesses'),
    results = document.querySelector('#results'),
    hint = document.querySelector('#hint'),
    low = 0,
    high = 100;
let win = Math.floor(Math.random() * high) + low,
    turn = 0,
    guessed = [];
console.log(win);

function play() {
  turn++;
  console.log(turn);
  let guess = document.getElementById('guess').value;
  guessed.push(guess);
  document.getElementById('guess').value = '';
  guesses.innerHTML = 'You have guessed ' + turn + ' times';
  results.innerHTML = guessed.join(',  ');
  if (guess == win) {
    console.log('Winner!');
    victory();
  } else if (turn >= 10) {
    gameover();
  } else {
    if (guess < win) {
      console.log('too low');
      hint.innerHTML = '<p>Too low!</p>';
    } else if (guess > win) {
      console.log('too high');
      hint.innerHTML = '<p>Too high!</p>';
    }
    hint.setAttribute('style', 'color: red');
  }
}

function gameover() {
  answer.innerHTML = '<h1>Oh no! You lost the game!</h1><p style="text-align: center">Click reset to play again</p>'
  submit.disabled = true;
  guesses.innerHTML = '';
  results.innerHTML = '';
  hint.innerHTML = '';
}

function victory() {
  answer.innerHTML = '<h1>Congratulations! You won!</h1><p style="text-align: center">Click reset to play again</p>';
  submit.disabled = true;
  guesses.innerHTML = '';
  results.innerHTML = '';
  hint.innerHTML = '';
}

function res() {
  win = Math.floor(Math.random() * high) + low;
  turn = 0;
  guessed = [];
  answer.innerHTML = '';
  console.log(win);
  submit.disabled = false;
}

reset.addEventListener('click', res);
submit.addEventListener('click', play);