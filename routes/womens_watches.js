var express = require('express');
var router = express.Router();
var watchesCtrl = require('../controllers/womens_watches');

router.get('/', watchesCtrl.index);


module.exports = router;    