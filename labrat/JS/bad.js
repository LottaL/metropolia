'use strict';
console.log('blabla');

let nav = document.querySelectorAll(".nav"),
    body = document.querySelector("body");

let help = document.createElement('div');
help.className = 'help';
body.appendChild(help);
help.addEventListener('click', function() {
 alert('You managed to hit the help button!');
});

nav[0].innerHTML = "<ul><li><a href='http://users.metropolia.fi/~lottalau/labrat/main.html'>Home</a></li><li><a href='http://users.metropolia.fi/~lottalau/labrat/content.html'>Content</a></li><li><a href='http://users.metropolia.fi/~lottalau/labrat/form.html'>Form</a></li></ul>";

let switcher = document.createElement('div');
switcher.className = 'switch';
body.appendChild(switcher);

switcher.addEventListener('click', function() {
  document.location.href = 'http://users.metropolia.fi/~lottalau/labrat/main2.html';
});