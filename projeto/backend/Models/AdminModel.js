const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var admin = new Schema({
   nome:{
      type : String,
      required : false
   }
});

const Admin = mongoose.model('Admin', admin);

module.exports = Admin;