var express = require("express");
var router = express.Router();
var MatchesData = require("../../models/MatchesData");

//@route    GET api/matches
//@desc     Get All Matches Documents
//@access   Public
router.get("/", function (req, res, next) {
  MatchesData.find().then((matches) => res.json(matches));
});

//@route    PUT api/matches
//@desc     Insert a particular match
//@access   Public
router.put("/", function (req, res, next) {
  var newMatch = new MatchesData({
    jobId: req.body.jobId,
    matches: req.body.matches,
  });

  // save new matches obj to database
  newMatch
    .save()
    .then((match) => res.status(200).json(match))
    .catch((err) => res.status(404).json({ success: false }));
});
