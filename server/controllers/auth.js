const { signInFunc, signUpFunc } = require('../functions/auth');

module.exports.getUser = (req, res) => {
  res.json({ data: req.user });
};

module.exports.signIn = signInFunc;

module.exports.signUp = async (req, res, next) => {
  const { error } = await signUpFunc(req.body);
  if (error) res.json({ error });
  else res.json({});
};

module.exports.logout = (req, res) => {
  req.logout();
  res.json({});
};
