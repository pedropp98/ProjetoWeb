const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var product = new Schema({
   image : {
      type : String,
      required : false,
   },
   title : {
      type : String,
      required : false
   },
   description : {
      type : String,
      required : false,
   },
   price : {
      type : String,
      required : false,
   },
   category : {
      type : String,
      required : false,
   },
   amount : {
      type : String,
      required : false,
   },
});

const Product = mongoose.model('Product', product);

module.exports = Product;