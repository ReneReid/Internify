var JobPostingData = require("./JobPostingData");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
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
    title: {
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
        type: [{
            type: Schema.Types.ObjectId, 
            ref: 'JobPostingData'
        }],
    },
    status: {
        type: String,
    },
});

module.exports = UserData = mongoose.model('UserData', UserSchema);