const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meandemo')
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));

const students = require("../model/student");
console.log(students);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "nodemysql",
  user: "root",
  password: "admin"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected MySql!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM person", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

router.get('/personList', function(req, res, next) {
  con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM person", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Hello Radhe Krishna');
});

router.get('/studentList', function(req, res, next) {
  students.find(function (err, students) {
    console.log(students);  
    if (err) return next(err);
    res.json(students);
  });
});


router.post('/saveStudent', function(req, res, next) {
   var stud = new students();
    stud.id = req.body.id;
    stud.name = req.body.name; 
    stud.city = req.body.city;
  stud.save(req.body, function (err, post) {    
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
