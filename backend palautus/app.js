const express = require('express');
const app = express();

const fs = require('fs');
const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

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
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./modules/database');
const dbconnection = db.connect();

passport.serializeUser((user, done) => {
  console.log('serialize: ' + user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(session({
  secret: 'keyboard LOL cat',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: true},
}));

passport.use(new LocalStrategy(
    (username, password, done) => {
      console.log('Here we go: ' + username);
      let res = null;

      const doLogin = (username, password) => {
        return new Promise((resolve, reject) => {
          db.login([username, password], connection, (result) => {
            console.log('result', result.length);
            resolve(result);
          });
        });
      };

      return doLogin(username, password).then((res) => {
        if (res.length < 1) {
          console.log('undone');
          return done(null, false);
        } else {
          console.log('done');
          return done(null, {username: username});
        }
      });

    },
));

app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
    passport.authenticate('local',
        {successRedirect: '/node/', failureRedirect: '/node/login.html'}));

app.set('trust proxy');
const sslkey = fs.readFileSync('/etc/pki/tls/private/ca.key');
const sslcert = fs.readFileSync('/etc/pki/tls/certs/ca.crt');
const options = {
  key: sslkey,
  cert: sslcert,
};

app.get('/', (req, res) => {
  if (req.secure) {
    console.log('req.user', req.user);
    if (req.user !== undefined) res.send('Hello ' + req.user.username);
    else res.redirect(301, './login.html');
  }
  else res.send('hello not secure?');
});

//app.listen(3000);
http.createServer((req, res) => {
  const redir = 'https://' + req.headers.host + '/node' + req.url;
  console.log('redir', redir);
  res.writeHead(301, {'Location': redir});
  res.end();
}).listen(3000);
https.createServer(options, app).listen(8000);