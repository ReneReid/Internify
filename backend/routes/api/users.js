var express = require("express");
var router = express.Router();
var UserData = require("../../models/UserData");

//@route    GET api/users/
//@desc     Get All User Documents
//@access   Public (?)

router.get("/", function (req, res, next) {
  UserData.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(404).json({ success: false }));
});

//@route    GET api/users/:id
//@desc     Get single User Document
//@access   Public

router.get("/:id", function (req, res, next) {
  UserData.find({ authId: req.params.id })
    .then((user) => res.status(200).json(user[0]))
    .catch((err) => res.status(404).json({ success: false }));
});

//@route    POST api/users
//@desc     Create a User document
//@access   Public

router.post("/", function (req, res, next) {
  // flesh out a new user
  var newUser = new UserData({
    authId: req.body.authId,
    name: req.body.name,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
    handle: req.body.handle,
    company: req.body.company,
    jobTitle: req.body.jobTitle,
    bio: req.body.bio,
    location: req.body.location,
    contact: req.body.contact,
    linkedIn: req.body.linkedIn,
    website: req.body.website,
    jobPostings: req.body.jobPostings,
    status: req.body.status,
  });

  // save new user to database
  UserData.find({ authId: newUser.authId })
    .then((result) => {
      if (result.length === 0) {
        newUser
          .save()
          .then((user) => res.status(200).json(user))
          .catch((err) => res.status(404).json({ success: false }));
      } else {
        UserData.find({ authId: newUser.authId })
          .then((user) => res.status(200).json(user[0]))
          .catch((err) => res.status(404).json({ success: false }));
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

//@route    PUT api/users/:id
//@desc     Create a User document
//@access   Public

router.put("/:id", function (req, res, next) {
  const authId = req.body.authId;
  // flesh out a new user
  var args = {
    name: req.body.name,
    email: req.body.email,
    profilePicture: req.body.profilePicture,
    handle: req.body.handle,
    company: req.body.company,
    jobTitle: req.body.jobTitle,
    bio: req.body.bio,
    location: req.body.location,
    contact: req.body.contact,
    linkedIn: req.body.linkedIn,
    website: req.body.website,
    status: req.body.status,
  };
  var jobPosting = req.body.jobPostings[0];

  for (var field in args) {
    if (
      args[field] === "" ||
      args[field] === [] ||
      args[field] === null ||
      args[field] === undefined
    ) {
      delete args[field];
    }
  }
  UserData.findOneAndUpdate(
    { authId: authId },
    {
      $set: {
        ...args,
      },
    }
  )
    .then((user) => {
      if (jobPosting) {
        UserData.findOneAndUpdate(
          { authId: authId },
          { $push: { jobPostings: jobPosting } },
          { useFindAndModify: false }
        )
          .then(() => res.status(200).json(user[0]))
          .catch((err) => res.status(404).json({ success: false }));
      }
    })
    .catch((err) => res.status(404).json({ success: false }));
});

//@route    DELETE api/:id
//@desc     DELETE a User document
//@access   Public (?)
// In future -> deleting a user will have to remove the authId from the matches array inside jobPosting

router.delete("/:id", function (req, res, next) {
  UserData.findById(req.params.id)
    .then((user) =>
      user.remove().then(() => res.status(200).json({ success: true }))
    )
    .catch((err) => {
      console.log(err);
      res.status(404).json({ success: false });
    });
});

module.exports = router;
