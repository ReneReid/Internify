var express = require("express");
var router = express.Router();
var MatchesData = require("../../models/MatchesData");

//@route    GET api/matches
//@desc     Get All Matches Documents
//@access   Public
router.get("/", function (req, res, next) {
  MatchesData.find().then((matches) => res.json(matches));
});

//@route    GET api/matches/:id
//@desc     Get single Matches Document
//@access   Public
router.get("/:jobId", function (req, res, next) {
  MatchesData.find({ jobId: req.params.jobId })
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(404).json({ success: false }));
});

//@route    POST api/matches
//@desc     Insert a particular match
//@access   Public
router.post("/", function (req, res, next) {
  console.log("POST request received.");
  var newMatch = new MatchesData({
    jobId: req.body.jobId,
    matches: req.body.matches,
    seeking: req.body.seeking,
    concepts: req.body.concepts,
    experience: req.body.experience,
    frameworks: req.body.frameworks,
    gpa: req.body.gpa,
    languages: req.body.languages,
    academicReq: req.body.academicReq,
    candidates: req.body.candidates,
    coop: req.body.coop,
  });

  // save new matches obj to database
  newMatch
    .save()
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(404).json({ success: false }));
  res.status(200).json("done");
});

//@route DELETE api/matches/:jobId
//@desc Deletes a particular match
//@access Public
router.delete("/:jobId", function (req, res, next) {
  MatchesData.findOneAndDelete({ jobId: req.params.jobId })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
