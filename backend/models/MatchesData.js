const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchesSchema = new Schema({
  jobId: {
    type: String,
  },
  matches: {
    type: [String],
  },
  notes: {
    type: Object,
  },
});

const MatchesData = mongoose.model("MatchesData", MatchesSchema);
module.exports = MatchesData;
