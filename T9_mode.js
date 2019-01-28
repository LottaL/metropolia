/*Write a function that returns the mode value of its argument array that contains integer values in
range 1..40. If the array is assumed to be in sorted order, can the mode calculation be done more
easily (with lesser steps / memory requirements)? How? (Give an implementation).
*/
'use strict';

let numbers = [1, 3, 6, 33, 7, 2, 5, 1, 35, 26, 33, 33, 6, 7, 23];
let count = 1;
let count2 = 1;

numbers.sort(function(a, b){return a-b});
console.log(numbers.sort(function(a, b){return a-b}));

console.log('mode: ' + mode(numbers));

//palauttaa yhden mode-arvon, vaikka niitä olisi monta
//mukailtu stack overflow'sta
function mode(array)
{
  if(array.length === 0) {
    return null;
  }
  let modemap = {};
  let modenro = array[0];
  let max = 1;

  for(let i = 0; i < array.length; i++) {
    let num = array[i];
    if (modemap[num] == null) {
      modemap[num] = 1;
    }
    else{
      modemap[num]++;
      if (modemap[num] > max) {
        modenro = num;
        max = modemap[num];
      }
    }
  }
  return modenro;
}