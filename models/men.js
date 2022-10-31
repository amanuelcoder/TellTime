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

const watchSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  },
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Watch', watchSchema);
