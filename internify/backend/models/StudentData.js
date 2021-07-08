const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
    gpaValue: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    coOp: {
        type: Boolean,
        required: true,
    },
    seeking: {
        type: Boolean,
        required: true
    },
    candidate: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    languages: {
        type: Object,
        required: true
    },
    frameworks: {
        type: Object,
        required: true
    },
    tools: {
        type: Object,
        required: true
    },
    concepts: {
        type: [String],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    academicReq: {
        type: Object,
        required: true
    },
    

    

});

module.exports = StudentData = mongoose.model('StudentData', StudentSchema);
