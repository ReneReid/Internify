const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobPostingSchema = new Schema({
  jobId: {
    type: String,
  },
  matches: {
    type: Number,
  },
  students: {
    type: Object,
  },
  dateCreated: {
    type: Date,
  },
  dateUpdated: {
    type: Date,
  },
  notes: {
    type: Object,
  },
  header: {
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    location: {
      type: String,
    },
    startDate: {
      type: String,
    },
    position: {
      type: [String],
    },
    length: {
      type: String,
    },
  },
  requirements: {
    experience: {
      type: String,
    },
    gpa: {
      type: String,
    },
    gpaValue: {
      type: String,
    },
    languages: {
      type: [String],
    },
    frameworks: {
      type: [String],
    },
    tools: {
      type: [String],
    },
    concepts: {
      type: [String],
    },
    isGpaRequired: {
      type: String,
    },
  },
  details: {
    description: {
      type: String,
    },
    positionType: {
      type: String,
    },
    pay: {
      type: String,
    },
    candidates: {
      type: String,
    },
    academicReq: {
      type: [String],
    },
    coOp: {
      type: String,
    },
  },
  contact: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    other: {
      type: String,
    },
    applicationSteps: {
      type: String,
    },
  },
});

const JobPostingData = mongoose.model("JobPostingData", JobPostingSchema);
module.exports = JobPostingData;
