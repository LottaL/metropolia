/*teht1.html (2p)
Dokumentti sisältää <button> elementin. Tee skripti, joka avaa ponnahdusikkunan, jossa lukee
'Nappia klikattu', kun <button> elementtiä klikataan*/

const nappi = document.querySelector('#nappi');

function popup(evt){
  alert('Nappia klikattu');
}

nappi.addEventListener('click', popup);