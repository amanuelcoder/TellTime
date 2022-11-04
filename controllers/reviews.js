const Watch = require('../models/menWatch');

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update
};


function edit(req, res) {
  Watch.findOne({ 'reviews._id': req.params.id }, function (err, watch) {
    const review = watch.reviews.id(req.params.id);
    res.render('reviews/edit', { review, title: 'Edit Review' });
  });
}


function update(req, res) {
  Watch.findOne({ 'reviews._id': req.params.id }, function (err, watch) {
    const reviewSubdoc = watch.reviews.id(req.params.id);
    if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/Watches/${watch._id}`);
    reviewSubdoc.content = req.body.content;
    reviewSubdoc.rating = req.body.rating;
    watch.save(function (err) {
      res.redirect(`/Watches/${watch._id}`);
    });
  });
}

function deleteReview(req, res, next) {
  Watch.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function (watch) {
    if (!watch) return res.redirect('/watches');
    watch.reviews.remove(req.params.id);
    watch.save().then(function () {
      res.redirect(`/watches/${watch._id}`);
    }).catch(function (err) {
      return next(err);
    });
  });
}

function create(req, res) {
  Watch.findById(req.params.id, function (err, watch) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    watch.reviews.push(req.body);
    watch.save(function (err) {
      res.redirect(`/watches/${watch._id}`);
    });
  });
}



