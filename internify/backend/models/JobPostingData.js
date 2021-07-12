const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const JobPostingSchema = new Schema({
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
      }
    },
    details: {
      description: {
        type: String,
      },
      position: {
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
module.exports = JobPostingData = mongoose.model('JobPostingData', JobPostingSchema);
