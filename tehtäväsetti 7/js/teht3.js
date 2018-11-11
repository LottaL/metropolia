/*teht3.html (4p)
Tee laskin, jossa on yhteenlasku, vähennys, kerto- ja jakolasku.
teht3.html sisältää kaksi tekstikenttää, joihin syötetään numerot, jotka lasketaan yhteen,
vähennetään, kerrotaan tai jaetaan, riippuen siitä mitä nappia käyttäjä painaa. Vastaus
tulostetaan <p id="vastaus"> elementin sisälle.
Jotta luvuilla voidaan laskea, tekstikenttien arvot pitää muuttaa numeroiksi unaarisella
operaattorilla tai esim. parseFloat -funktiolla, koska tekstikenttien tyyppi on merkkijono.
Tekstikenttien sisällön voi lukea value -attribuutilla (element.value).
Jos haluat haastetta, vaihda nappien tilalle alasvetovalikko, josta valitaan laskun tyyppi. + 2p
Tai vielä haasteellisemmasa versiossa tee vain yksi tekstikenttä, johon kirjoitat laskun.
Tässä voit käyttää apuna esim includes ja split -metodeja sekä switch -lausetta + 4p*/

const yht = document.querySelector('#sum'),
    vah = document.querySelector('#sub'),
    ker = document.querySelector('#multi'),
    jak = document.querySelector('#div'),
    vas = document.querySelector('#vastaus')

;
let tulos
;

function yhteen() {
  let luku1 = document.getElementById('num1').value;
  luku1 = parseInt(luku1); //jostain syystä tää ei toimi ilman bonussulkua, älä kysy en tiedä @___@
  let luku2 = document.querySelector('#num2').value;
  luku2 = parseInt(luku2);
  tulos = luku1 + luku2;
  vas.innerHTML = '<p>' + tulos + '</p>';
// vas.innerHTML = `<p>${tulos}</p>`;
}

function vahennys() {
  let luku1 = document.getElementById('num1').value;
  luku1 = parseInt(luku1); //jostain syystä tää ei toimi ilman bonussulkua, älä kysy en tiedä @___@
  let luku2 = document.querySelector('#num2').value;
  luku2 = parseInt(luku2);
  tulos = luku1 - luku2;
  vas.innerHTML = '<p>' + tulos + '</p>';
// vas.innerHTML = `<p>${tulos}</p>`;

}

function kerto() {
  let luku1 = document.getElementById('num1').value;
  luku1 = parseInt(luku1); //jostain syystä tää ei toimi ilman bonussulkua, älä kysy en tiedä @___@
  let luku2 = document.querySelector('#num2').value;
  luku2 = parseInt(luku2);
  tulos = luku1 * luku2;
  vas.innerHTML = '<p>' + tulos + '</p>';
// vas.innerHTML = `<p>${tulos}</p>`;
}

function jako() {
  let luku1 = document.getElementById('num1').value;
  luku1 = parseInt(luku1); //jostain syystä tää ei toimi ilman bonussulkua, älä kysy en tiedä @___@
  let luku2 = document.querySelector('#num2').value;
  luku2 = parseInt(luku2);
  tulos = luku1 / luku2;
  vas.innerHTML = '<p>' + tulos + '</p>';
// vas.innerHTML = `<p>${tulos}</p>`;
}

yht.addEventListener('click', yhteen);
vah.addEventListener('click', vahennys);
ker.addEventListener('click', kerto);
jak.addEventListener('click', jako);