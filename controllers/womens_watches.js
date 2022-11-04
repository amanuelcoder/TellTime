const Watch = require('../models/women_watch');

module.exports = {
  index,
};

function index(req, res) {
  Watch.find({}, function (err, watches) {
    res.render('watches/womens_watches', { title: "Womens's Collection", watches });
  });
}

