const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          return done(null, false, { message: 'useri ar arsebobs' });
        } else if (password === user.password) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'araswori paroli' });
        }
      } catch (error) {
        console.log(error);
      }
    }),
  );
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });
  passport.deserializeUser(async function (_id, done) {
    try {
      const user = await User.findOne({ _id });
      if (!user) {
        return done(null, 'Error: Failed to deserialize user out of session');
      }
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
