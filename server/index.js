const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieSession = require('cookie-session');
const path = require('path');
const { PORT } = require('./config/default');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

// middlewares
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  }),
);
// app.use(express.static(path.join(__dirname, './public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  }),
);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'hubwiz app',
    cookie: { maxAge: 60 * 1000 * 30 },
  }),
);

require('./passport/passport-local')(passport);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(require('./routes'));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public', 'index.html'));
// });

app.use(function (err, req, res, next) {
  console.log(String(err));
  res.json({ error: String(err) });
});

app.listen(process.env.PORT || PORT);
