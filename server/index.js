const express = require('express');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const api = express.Router();
const user = express.Router();
const auth = express.Router();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

module.exports = { app, api, user, auth };

// require('./import-books.js');

require('./create-sample-user.js');
require('./routes/auth.js');
require('./routes/profile.js');
require('./routes/books.js');
require('./routes/entries.js');

app.use('/api', api);
app.use('/user', passport.authenticate('jwt', { session: false }), user);
app.use('/auth', auth);

// Everything else is client routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
