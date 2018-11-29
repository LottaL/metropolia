const express = require('express');
const app = express();

const database = require('./modules/database');
const resize = require('./modules/resize');

const multer = require('multer');
const upload = multer({dest: 'public/img/'});

app.use(express.static('public'));

app.use('/modules', express.static('node_modules'));

//-------------------------------------------------------

const connection = database.connect();

database.select(connection, (results) => {
  console.log(results);
});

const insertToDB = (data, res, next) => {
  database.insert(data, connection, (response) => {
    next();
  });
};

const selectAll = (req, next) => {
  database.select(connection, (results) => {
    req.custom = results;
    next();
  });
};

//tallenna tiedosto
app.post('/upload', upload.single('kuva'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  next();
});

// tallenna tietokantaan
app.use('/upload', (req, res, next) => {
  const data = [
    req.body.category,
    req.body.title,
    req.body.details,
    req.body.lat,
    req.body.lng,
    req.file.filename];
  // req.file.mimetype];
  insertToDB(data, res, next);
});

//hae päivitetyt tiedot kannasta
app.use('/upload', (req, res, next) => {
  selectAll(req, next);
});

//lähetä tiedot selaimeen
app.use('/upload', (req, res) => {
  res.send(req.custom);
});

app.listen(3000);