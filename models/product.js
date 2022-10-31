const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    title:{
        type:String,
        required:true,
        trim: true
    },
    slug:{
        type:String,
        trim: true
    }, 
     desc:{
        type:String,
        required:true,
        trim: true
    },
    category:{
        type:String,
        required:true,
        trim: true
    },
    price:{
        type:Number,
        trim: true,
        required:true
    },
    image:{
        type:String,
        
    },
    tt:{
        type:Number,
        required:true,
        default:1
    }

});

module.exports = mongoose.model('Product', ProductSchema);