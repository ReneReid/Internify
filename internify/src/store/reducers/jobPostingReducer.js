
import { ADD_JOB_HEADER } from "../actions/types/jobPostTypes";

const initialState = {
    jobHeaderData: [],
    techStackData: [],
    jobDetailsData: [],
    contactDetailsData: [],
    finalJobPostingsList: []
}

export default function(state = initialState, action) {
    switch(action.type) { 
        case ADD_JOB_HEADER:
            initialState.jobHeaderData.push(action.payload);
            return {
                ...state,
                jobHeaderData: initialState.jobHeaderData
            } 
        default:
            return state;
    }
}
