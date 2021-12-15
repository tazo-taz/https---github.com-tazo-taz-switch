const Number = require('../models/number');
const Call = require('../models/call');

module.exports.getMyNumbersFunc = (userId) => Number.find({ userId });

module.exports.getNumberFunc = (_id) => Number.findById(_id);

module.exports.createNumberFunc = (data) => Number.create(data);

module.exports.updateNumberFunc = (_id, data) => Number.findByIdAndUpdate(_id, data);

module.exports.deleteNumberFunc = (_id) => Number.findByIdAndDelete(_id);

module.exports.createCallFunc = (data) => Call.create(data);
