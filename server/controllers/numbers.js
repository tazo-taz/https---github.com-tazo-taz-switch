const {
  getMyNumbersFunc,
  createNumberFunc,
  updateNumberFunc,
  deleteNumberFunc,
  createCallFunc,
} = require('../functions/numbers');

module.exports.getMyNumbers = async (req, res) => {
  const numbers = await getMyNumbersFunc(req.user._id);
  res.json({ data: numbers });
};

module.exports.createNumber = async (req, res) => {
  const { _id } = req.user;
  await createNumberFunc({ ...req.body, userId: _id });
  const numbers = await getMyNumbersFunc(_id);
  res.json({ data: numbers });
};

module.exports.updateNumber = async (req, res) => {
  const { _id } = req.params;
  await updateNumberFunc(_id, req.body);
  const numbers = await getMyNumbersFunc(req.user._id);
  res.json({ data: numbers });
};

module.exports.deleteNumber = async (req, res) => {
  const { _id } = req.params;
  await deleteNumberFunc(_id);
  const numbers = await getMyNumbersFunc(req.user._id);
  res.json({ data: numbers });
};

module.exports.callNumber = async (req, res) => {
  const { username } = req.user;
  await createCallFunc({ ...res.locals.data, username });
  res.json({});
};
