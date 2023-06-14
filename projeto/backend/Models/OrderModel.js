const mongoose = require('mongoose');

const Schema = mongoose.schema;

var order = new Schema({
   nome:{
      type : String,
      required : false
   }
});

const Order = mongoose.model('Order', order);

module.exports = Order;