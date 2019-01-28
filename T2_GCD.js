/*2. Write a function to compute the greatest common divisor (gcd) of its two arguments. Hint: search for
Euclid’s algorithm and write an application that allows the user to input a numerator and a
denominator and shows the value in simplified (sievennetty) format with help of the gcd function. For
example, 9/30 would be simplified to 3/10.*/
"use_strict";
const calculate = document.querySelector('#calculate'),
    numerator = document.querySelector('#numerator'),
    denumerator = document.querySelector('#denumerator'),
    answer = document.querySelector('#answer');
let win = Math.floor(Math.random() * 100) + 0;
console.log(win);

function gcd() {
  let a, b, c;
  a = document.getElementById('numerator').value;
  b = document.getElementById('denumerator').value;
  done = false;
  if (b > a) {
    let num = a;
    a = b;
    b = num;
  }
  console.log(a +'  '+ b);
  while (done === false) {
    if (b === 0) {
      console.log('tulos = ' + a);
      c = a;
      done = true;
    }
    a %= b;
    if (a === 0) {
      console.log('tulos = '+b);
      c = b;
      done = true;
    }
      b %= a;
  }
  return c;
}

function simplify() {
  answer.innerHTML = '<p></p>';
  let a = document.getElementById('numerator').value,
      b = document.getElementById('denumerator').value,
      result1, result2;

  result1 = a/gcd();
  result2 = b/gcd();

  answer.innerHTML = '<p>'+ result1 + '<hr>' +result2 +'</p>'
}

calculate.addEventListener('click', simplify);