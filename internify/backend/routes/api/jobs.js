var express = require('express');
var router = express.Router();

// Jobs Model //
var JobPostingData = require('../../models/JobPostingData');

//@route    GET api/jobs
//@desc     Get All Job Posting Items
//@access   Public
router.get('/', function(req, res, next) {
  JobPostingData.find()
    .then(jobs => res.json(jobs))
});

//@route    POST api/jobs
//@desc     Create A Post 
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
      .catch(err => console.log(err));

});

//@route    DELETE api/jobs
//@desc     DELETE A Post 
//@access   Public
router.delete('/:id', function(req, res, next) {
    
  JobPostingData
    .findById(req.params.id)
    .then(job => job.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;