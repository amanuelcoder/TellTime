const Watch = require('../models/watch');

module.exports = {
  index,
};

function index(req, res) {
  Watch.find({}, function(err, watches) {
    res.render('watches/index', { title: 'All Watches', watches});
  });
}