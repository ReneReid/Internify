var express = require('express');
var router = express.Router();
var JobPostingData = require('../../models/JobPostingData');

//@route    GET api/jobs/getAll
//@desc     Get All Job Documents
//@access   Public
router.get('/', function(req, res, next) {
  JobPostingData.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(404).json({success: false}));
});

//@route    GET api/jobs/getOne/:id
//@desc     Get Single Job Document
//@access   Public
router.get('/:id', function(req, res, next) {
  JobPostingData.findById(req.params.id)
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(404).json({success: false}));
});

//@route    POST api/jobs
//@desc     Create A Job Document 
//@access   Public
router.post('/', function(req, res, next) {
  console.log("in post: ", req.body);
    var newJob = new JobPostingData({
      header: req.body.header, 
      requirements: req.body.requirements,
      details: req.body.details,
      contact: req.body.contact
    });

    // save new job to database
    newJob
      .save()
      .then(job => res.status(200).json(job))
      .catch(err => res.status(404).json({success: false}));

});

//@route    DELETE api/jobs/:id
//@desc     DELETE A Job Document
//@access   Public
router.delete('/:id', function(req, res, next) {
    
  JobPostingData
    .findById(req.params.id)
    .then(job => job.remove().then(() => res.status(200).json({success: true})))
    .catch(err => {
      console.log(err);
      res.status(404).json({success: false})
    });
});

module.exports = router;