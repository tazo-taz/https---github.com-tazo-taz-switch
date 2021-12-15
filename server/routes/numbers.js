const numbers = require('../controllers/numbers');
const use = require('../middleware/errorHandler');
const { isUser } = require('../middleware/statusChecher');
const { checkNumber, checkTypes } = require('../middleware/typeChecker');
const router = require('express').Router();

router.get('/mynumbers', isUser, use(numbers.getMyNumbers));

router.post('/number', isUser, checkTypes, use(numbers.createNumber));

router.put('/number/:_id', isUser, checkTypes, use(numbers.updateNumber));

router.delete('/number/:_id', isUser, use(numbers.deleteNumber));

router.post('/numbercall/:_id', isUser, checkNumber, use(numbers.callNumber));

module.exports = router;
