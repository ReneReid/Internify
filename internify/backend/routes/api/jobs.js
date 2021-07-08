var express = require('express');
var router = express.Router();
var JobPostingData = require('../../models/JobPostingData');

//@route    GET api/jobs/getAll
//@desc     Get All Job Documents
//@access   Public
router.get('/getAll', function(req, res, next) {
  JobPostingData.find()
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(404).json({success: false}));
});

//@route    GET api/jobs/getOne/:id
//@desc     Get Single Job Document
//@access   Public
router.get('/getOne/:id', function(req, res, next) {
  JobPostingData.findById(req.params.id)
    .then(jobs => res.status(200).json(jobs))
    .catch(err => res.status(404).json({success: false}));
});

//@route    POST api/jobs
//@desc     Create A Job Document 
//@access   Public
router.post('/', function(req, res, next) {

    var newJob = new JobPostingData({
      title: req.body.title,
      company: req.body.company,
      startDate: req.body.startDate,
      positionLengthInMonths: req.body.positionLengthInMonths,
      positionType: req.body.positionType,
      experienceLengthInMonths: req.body.experienceLengthInMonths,
      isGpaRequired: req.body.isGpaRequired,
      gpaPercentage: req.body.gpaPercentage,
      codingLanguages: req.body.codingLanguages,
      frameworks: req.body.frameworks,
      workTools: req.body.workTools,
      concepts: req.body.concepts,
      jobDescription: req.body.jobDescription,
      locationType: req.body.locationType,
      salary: req.body.salary,
      citizenshipRequirements: req.body.citizenshipRequirements,
      academicRequirements: req.body.academicRequirements,
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
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
