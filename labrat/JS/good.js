'use strict';
console.log('blabla');

let nav = document.querySelectorAll(".nav"),
    body = document.querySelector("body");

let help = document.createElement('div'),
    helpicon = document.createElement('div');

helpicon.className = 'help';
help.className = 'helpcontainer';
body.appendChild(help);
help.appendChild(helpicon);
help.addEventListener('click', function() {
  alert('Close enough :)');
});

nav.forEach(function(a) {
  a.innerHTML = "<ul><li><a href='http://users.metropolia.fi/~lottalau/labrat/main2.html'>Home</a></li><li><a href='http://users.metropolia.fi/~lottalau/labrat/content2.html'>Content</a></li><li><a href='http://users.metropolia.fi/~lottalau/labrat/form2.html'>Form</a></li></ul>";
});

let footer = document.createElement('footer');


footer.innerHTML = "<div class='terriblegrid'><p>Peter Person, fancy title</p> <p>123-456789</p> <p>peter.person@inaccessible.com</p>\n" +
    "<p>William Worker, another fancy title</p> <p>345-123456</p> <p>william.worker@@inaccessible.com</p>\n" +
    "<p>Dina Developer, and another</p> <p>890-8765432</p> <p>dina.developer@@inaccessible.com</p></div>"
body.appendChild(footer);

let switcher = document.createElement('div');
switcher.className = 'switch';
body.appendChild(switcher);

switcher.addEventListener('click', function() {
  document.location.href = 'http://users.metropolia.fi/~lottalau/labrat/main.html';
});