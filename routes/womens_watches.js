var express = require('express');
var router = express.Router();
var watchesCtrl = require('../controllers/womens_watches');



// GET /watches/men (index functionality)
router.get('/', watchesCtrl.index);


module.exports = router;    