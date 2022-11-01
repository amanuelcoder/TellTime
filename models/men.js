const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  }, {
    timestamps: true
  });

const menSchema = new Schema({

    title: {
    type: String,
    required: true,
    },
    imagePath: {
    type: String,
    required: true,
    },
    description: {
    type: String,
    required: true,
    },
    price: {
    type: Number,
    required: true,
    },
    model: {
    type: String,
    },
    available: {
    type: Boolean,
    required: true,
    },
    reviews: [reviewSchema]
    }, {
    timestamps: true
    });



module.exports = mongoose.model('Men', menSchema);






