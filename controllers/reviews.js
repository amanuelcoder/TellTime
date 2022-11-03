const Watch = require('../models/menWatch');

module.exports = {
  create,
  delete: deleteReview,
  // edit,
  // update
};

// function update(req, res) {
//   Watch.findOne({'reviews._id': req.params.id}, function(err, post) {
//     const review = post.reviews.id(req.params.id);
//     if (!review.user.equals(req.user._id)) return res.redirect(`/watches/${watch._id}`);
//     review.content = req.body.content;
//     review.rating = req.body.rating;
//     Watch.save(function(err) {
//       res.redirect(`/watches/${watch._id}`);
//     });
//   });
// }

// function edit(req, res) {
//   Watch.findOne({'reviews._id': req.params.id}, function(err, watch) {
//     const review = Watch.reviews.id(req.params.id);
//     res.render('watches/edit', {review, title: 'Edit Review'});
//   });
// }


function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query for a movie with a
  // review nested within an array
  Watch.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function(watch) {
    if (!watch) return res.redirect('/watches');
    watch.reviews.remove(req.params.id);
    watch.save().then(function() {
      res.redirect(`/watches/${watch._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

function create(req, res) {
  Watch.findById(req.params.id, function(err, watch) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    watch.reviews.push(req.body);
    watch.save(function(err) {
      // Step 5
      res.redirect(`/watches/${watch._id}`);
    });
  });
}



