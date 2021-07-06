const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobPostingSchema = new Schema({
  header: {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    position: {
      type: [String],
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
  },
  requirements: {
    experience: {
      type: String,
      required: true,
    },
    isGpaRequired: {
      type: String,
      required: true,
    },
    gpaValue: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    frameworks: {
      type: [String],
      required: true,
    },
    tools: {
      type: [String],
      required: true,
    },
    concepts: {
      type: [String],
      required: true,
    },
  },
  details: {
    description: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    pay: {
      type: String,
      required: true,
    },
    candidates: {
      type: String,
      required: true,
    },
    academicReq: {
      type: [String],
      required: true,
    },
    coOp: {
      type: String,
      required: true,
    },
  },
  contact: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
      required: false,
    },
    other: {
      type: String,
      required: false,
    },
    applicationSteps: {
      type: String,
      required: true,
    },
  },
});

module.exports = JobPostingData = mongoose.model(
  "JobPostingData",
  JobPostingSchema
);
