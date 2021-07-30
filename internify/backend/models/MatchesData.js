const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchesSchema = new Schema({
  jobId: {
    type: String,
  },
  matches: {
    type: [String],
  },
  seeking: {
    type: Number,
  },
  concepts: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  frameworks: {
    type: Number,
  },
  gpa: {
    type: Number,
  },
  languages: {
    type: Number,
  },
  academicReq: {
    type: Number,
  },
  candidates: {
    type: Number,
  },
  coop: {
    type: Number,
  },
});

const MatchesData = mongoose.model("MatchesData", MatchesSchema);
module.exports = MatchesData;
