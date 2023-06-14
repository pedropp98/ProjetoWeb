const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var client = new Schema({
   nome:{
      type : String,
      required : false
   }
});

const Client = mongoose.model('Client', client);

module.exports = Client;