const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  authId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  handle: {
    type: String,
  },
  company: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  contact: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  website: {
    type: String,
  },
  jobPostings: {
    type: [String],
  },
  status: {
    type: String,
  },
});

const UserData = mongoose.model("UserData", UserSchema);
module.exports = UserData;
