/*Write a function intRange that returns an array of integers from its arguments low to high with
interval step. Implement lotto number generator (returns 7 unique random numbers from 1 to 40)
using pickn and intRange.*/

'use strict';

lottery();

//i have absolutely no idea how these would play together efficiently for this purpose
//so here goes something:
function lottery() {
  let lotterynum = pickNumbers(intRange(1, 40, 1), 7);
  //random integer generator pickNumbers() gets an array and the number of lottery numbers as arguments.
  //array is created with intRange() with arguments min = 1, max = 40 and step = 1
  return lotterynum;
}

function intRange(min, max, st) {
  //console.log('function start');
  let array = [];
  for (let i = min; i < max; i += st) {
    array.push(i);
  }
  return array;
}

//from T11
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