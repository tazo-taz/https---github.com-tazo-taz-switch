const { isNum, onlyAlphabet } = require('../common tools/types');
const { getNumberFunc } = require('../functions/numbers');

module.exports.checkTypes = async (req, res, next) => {
  const { phone, name } = req.body;
  if (isNum(phone) && onlyAlphabet(name)) next();
  else res.json({ error: 'wrong data' });
};

module.exports.checkNumber = async (req, res, next) => {
  const { phone, name } = await getNumberFunc(req.params._id);
  if (isNum(phone) && onlyAlphabet(name)) {
    res.locals.data = { phone, name };
    next();
  } else res.json({ error: 'wrong data' });
};
