const User = require('../models/user');
const passport = require('passport');

module.exports.signUpFunc = async (data) => {
  const user = await User.findOne({ username: data.username });
  if (user) return { error: 'useri arsebobs' };
  await User.create(data);
  return {};
};

module.exports.signInFunc = (req, res, next) => {
  passport.authenticate('local', function (error, user, info) {
    if (error) res.json({ error });
    if (info) return res.json({ error: info.message });
    if (user)
      req.login(user, async (error) => {
        if (error) res.json({ error });
        else
          return res.json({
            data: user,
          });
      });
  })(req, res, next);
};
