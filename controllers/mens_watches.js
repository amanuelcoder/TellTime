const Watch = require('../models/men_watch');

module.exports = {
  index,
};

function index(req, res) {
  Watch.find({}, function(err, watches) {
    res.render('watches/mens', { title: "Men's Collection", watches });
  });
}

