const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/watches/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);
router.put('/reviews/:id/', ensureLoggedIn, reviewsCtrl.update);

module.exports = router;