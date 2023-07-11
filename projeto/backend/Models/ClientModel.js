const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var client = new Schema({
   name:{
      type : String,
      required : false
   },
   email : {
      type : String,
      required : true
   },
   rg : {
      type : String,
      required : true
   },
   address : {
      type : String,
      required : false
   },
   password : {
      type : String,
      required : true
   }
});

const Client = mongoose.model('Client', client);

module.exports = Client;