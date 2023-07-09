const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const order = new mongoose.Schema({
   client: {
      type : mongoose.Schema.Types.ObjectId,
      required : true   
   },
   products: [
      {
         id : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
         },
         amount : {
            type : Number,
            required : true
         }
      }
   ]
 });

const Order = mongoose.model('Order', order);

module.exports = Order;