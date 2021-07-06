const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const JobPostingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    positionLengthInMonths: {
        type: Number,
        required: true
    },
    positionType: {
        type: [String],
        required: true
    },
    experienceLengthInMonths: {
        type: Number,
        required: true
    },
    isGpaRequired: {
        type: Boolean,
        required: true
    },
    gpaPercentage: Number,
    codingLanguages: {
        type: [String],
        required: true
    },
    frameworks: {
        type: [String],
        required: true
    },
    workTools: {
        type: [String],
        required: true
    },
    concepts: {
        type: [String],
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    locationType: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    citizenshipRequirements: {
        type: String,
        required: true
    },
    academicRequirements: {
        type: String,
        required: true
    },
    isCoop: Boolean

});

module.exports = JobPostingData = mongoose.model('JobPostingData', JobPostingSchema);
