var MockStudentData = require("../../models/MockStudentData");

var express = require('express');
var router = express.Router();
var StudentData = require('../../models/StudentData');

//@route    GET api/students
//@desc     Get All Student Documents
//@access   Public
router.get('/', function(req, res, next) {
    StudentData.find()
    .then(students => res.json(students))
});

//@route    POST api/students/insertAll
//@desc     Create ALL Student Documents
//@access   Public
//@note     This API is temporary 
router.post('/insertAll', function(req, res, next) {
    
    // save new job to database
    StudentData.insertMany(MockStudentData)
    .then(job => res.status(200).json(job))
    .catch(err => console.log(err));
});

//@route    DELETE api/students
//@desc     DELETE A Student Document 
//@access   Public
router.delete('/:id', function(req, res, next) {
    
    StudentData
      .findById(req.params.id)
      .then(student => student.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
