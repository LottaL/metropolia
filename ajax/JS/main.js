'use strict';
const btn = document.querySelector('.searchbtn');

function button(evt) {
  let haku = document.getElementById('search').value; //hakee tekstikentän arvon
  search(haku);//hakufunktio päälle
  //alert(haku); //testi
}

function search(param) {
  //console.log('debug'); DEBUG
  fetch('http://api.tvmaze.com/search/shows?q=' + param)
      .then(function(vastaus){
        console.log(vastaus);
        return vastaus.json();
      }).then(function(json){
    makelist(findresults(json));
  }).catch(function(error){
    console.log(error);
  });

  function findresults(results) {
    //console.log(results);
    var newresults = [];
    for (var i = 0; i < results.length; i++) {
      let result = results[i];
      if (result.show.image != null) {
        var img = result.show.image.medium;
      } else {
        img = 'img/not-found.png';
        console.log('IMG NULL');
      }
      var name = result.show.name;
      var site = result.show.officialSite;
      var summary = result.show.summary;
      if (summary == null) {
        summary = '...';
      }
      var genres = result.show.genres;
      if (genres.length < 1) {
        genres = ["[Undefined]"];
      }
      console.log(genres);

      //Create object for the show
      var show = {
        name: name,
        link: site,
        image: img,
        summary: summary,
        genres: genres.join(', ')
      };
      //push show-object into new array
      newresults.push(show);
    }
    //console.log(newresults); DEBUG
    return newresults;
    /*document.querySelector('img').src = osoite;
    document.querySelector('img').alt = nimi;
    document.querySelector('figcaption').innerText = kuvaus;*/
  }
  function makelist(array){
    const biglist = document.getElementById("results");
    //console.log("biglist"); DEBUG

    for (var i = 0; i < array.length; i++) {
      let shows = array[i];
      var show = document.createElement("ul");
      var name = '<li><h2>' + shows.name + '</h2></li>';
      var link = '<li><a href="' + shows.link +'" class="button">Go to web page</a></li>';
      var image = '<li><img class="poster" src="' + shows.image + '"></li>';
      var summary = '<li><p>Summary:</p>' + shows.summary + '</li>';
      var genre = '<li><p class="genre">Genres: ' + shows.genres + '</p></li>';
      if (array[i].link != null) {
        show.innerHTML = name + image + summary + genre + link;
      } else {
        show.innerHTML = name + image + summary + genre;
      }
      biglist.appendChild(show);
    }
  }

}

btn.addEventListener('click', button);