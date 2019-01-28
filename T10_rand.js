/*Write a function rndIntFromTo that takes two parameters, from and to, and returns a function
that returns random number in range from..to (both from and to included). Test your function by
verifying that the average of sufficiently large number of random numbers in range 1..9 is correct.*/
'use strict';

let start = 1, end = 9;

for (let i = 0; i < 100; i++) {
  console.log(rndIntFromTo(start, end));
}

console.log('FINISHED')

function rndIntFromTo(from, to) {
  let random = Math.floor(Math.random() * to) + from;
  return random;
}
