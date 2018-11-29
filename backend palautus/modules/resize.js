'use strict';
const sharp = require('sharp');

const resizeimage = (kuva, koko, uusikuva) => {
  sharp(kuva)
    .resize(koko)
    .toFile(uusikuva)
    .then((data) => {
      console.log(data);
      return true;
  })
    .catch((err) => {
     console.log(err);
  });
};

module.exports = {
  resizeimage: resizeimage,
};