var express = require('express');
var router = express.Router();
var watchesCtrl = require('../controllers/watches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', watchesCtrl.index);
router.get('/new', watchesCtrl.new);
router.get('/:id', watchesCtrl.show);
router.post('/', ensureLoggedIn, watchesCtrl.create);


module.exports = router;
