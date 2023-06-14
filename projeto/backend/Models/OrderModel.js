const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var order = new Schema({
   nome:{
      type : String,
      required : false
   }
});

const Order = mongoose.model('Order', order);

module.exports = Order;