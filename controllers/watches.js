const Watch = require('../models/menWatch');

module.exports = {
  index,
  show,
  new: newWatch,
  create
};


function index(req, res) {
  Watch.find({}, function (err, watches) {
    res.render('watches/watches', { title: "Men's Collection", watches });
  });
}


function show(req, res) {
  Watch.findById(req.params.id, function (err, Watch) {
    res.render('watches/show', { title: 'Detail', Watch });
  });
}

function newWatch(req, res) {
  res.render('watches/new', { title: 'Add Watch' });
}



function create(req, res) {
  const watch = new Watch(req.body);
  watch.save(function (err) {
    if (err) return res.redirect('/watches/new');
    console.log(watch);
    res.redirect(`/watches/${watch._id}`);
  });
}

