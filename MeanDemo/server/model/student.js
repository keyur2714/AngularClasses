var mongoose = require("mongoose");

var student = new mongoose.Schema({
  "id" : {type : Number},
  "name" : {type : String},
  "city" : {type : String}
});

module.exports = mongoose.model('students', student);