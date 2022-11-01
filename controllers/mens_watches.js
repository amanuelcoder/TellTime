const Watch = require('../models/men');

module.exports = {
  index,
};

function index(req, res) {
  Watch.find({}, function(err, watches) {
    res.render('watches/mens_watches', { title: "Men's Collection", watches });
  });
}

