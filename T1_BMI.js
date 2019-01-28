/*1. Write a function that calculates and returns the BMI value, given two parameters height and weight.
    Return value undefined if BMI can not be calculated. Write an application that allows the user to
    input their height and weight, and shows their BMI after a “calculate BMI” button is pressed.*/
"use_strict";
const laske = document.querySelector('#calculate'),
    vast = document.querySelector('#result');

function bmi() {
  console.log('bmi');
  let pit= document.getElementById('height').value;
  pit = pit/100;
  let pit2 = Math.pow(pit, 2);
  //treenimielessä kaksi erilaista valintatapaa
  let pai = document.querySelector('#weight').value;
  let tulos = (pai / pit2).toFixed(2);
  console.log('laskutoimitus: '+ pai + 'kg/' + pit2 + 'm^2 = ' + tulos );
  console.log(tulos);
  if (isNaN(tulos)) {
    tulos = undefined;
  }
  vast.innerHTML = '<h1>Your body mass index is: </h1><p>'+tulos+'</p>';
}

laske.addEventListener('click', bmi);