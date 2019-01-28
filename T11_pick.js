/*Write a function pickn that returns an array of n unique random elements from its argument array
a. If n elements can’t be picked, return as many as possible.
*/
'use strict';

let a = [1, 6, 23, 8, 9, 37, 2, 1, 4, 34];
let n = 5;

console.log(pickNumbers(a, n));

function pickNumbers(array, len) {
  let newarr = [];
  let random;
  if (len > array.length) {
    console.log('len is bigger than array');
    for (let i = 0; i < array.length; i++) {
      do {
        random = Math.floor(Math.random() * array.length);
      } while (array[random] === undefined);
      newarr.push(array[random]);
      array[random] = undefined;
    }
  } else {
    console.log('array is bigger than len');
    for (let i = 0; i < len; i++) {
      do {
        random = Math.floor(Math.random() * array.length);
      } while (array[random] === undefined);
      newarr.push(array[random]);
      array[random] = undefined;
    }
  }
  return newarr;
}