const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  called: {
    default: new Date(),
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('call', schema);
