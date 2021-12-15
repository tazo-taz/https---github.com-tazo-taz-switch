module.exports.isNum = (a) => new RegExp('^[0-9]*$').test(a);

module.exports.onlyAlphabet = (a) => new RegExp('^[a-zA-Z]*$').test(a);
