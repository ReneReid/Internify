
const initialState = {
    jobPosting = {
        id: 0,
        jobTitle: String,
        companyName: String,
        companyAddress: String,
        startDate: Date,
        positionLength: String,
        positionType: String,
        experienceLength: String,
        gpaRequired: Boolean,
        gpaPercentage: String,
        codingLanguages: Array,
        frameworks: Array,
        workTools: Array,
        compSciConcepts: Array,
        jobDescription: String,
        locationType: String,
        salary: String,
        citizenshipReqs: String,
        academicReqs: Array,
        coopReqs: Boolean
    },
    jobPostingsList: []
}

export default function(state = initialState, action) {
    switch(action.type) {   
        default:
            return state;
    }
}
