module.exports.isUser = (req, res, next) => {
  if (req.user) next();
  else res.json({ error: 'Access denied' });
};
