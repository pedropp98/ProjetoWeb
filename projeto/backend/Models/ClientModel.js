const mongoose = require('mongoose');

const Schema = mongoose.schema;

var client = new Schema({
   nome:{
      type : String,
      required : false
   }
});

const Client = mongoose.model('Client', client);

module.exports = Client;