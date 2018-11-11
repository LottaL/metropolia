/*teht2.html (4p)
Dokumentti sisältää <img> ja <p> elementit. Tee CSS joka piilottaa <p> elementin ja skripti + CSS,
joka näyttää <p> elementin, kun hiiri liikutetaan <img> elementin päälle (mouseenter) ja piilottaa
<p> elementin, kun hiiri poistuu <img> elementin päältä (mouseleave).*/

const teksti = document.querySelector('p');
const kissa = document.querySelector('img');

function nayta() {
  teksti.style.display = 'block';
  kissa.removeEventListener('mouseenter', nayta);
  kissa.addEventListener('mouseleave', piilota);
}

function piilota() {
  teksti.style.display = 'none';
  kissa.removeEventListener('mouseleave', piilota);
  kissa.addEventListener('mouseenter', nayta);
}

kissa.addEventListener('mouseenter', nayta);