const mongoose = require('mongoose');

const Schema = mongoose.schema;

var product = new Schema({
   nome:{
      type : String,
      required : false
   }
});

const Product = mongoose.model('Product', product);

module.exports = Product;