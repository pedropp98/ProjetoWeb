const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var admin = new Schema({
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

const Admin = mongoose.model('Admin', admin);

module.exports = Admin;