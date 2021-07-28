import { ADD_JOB_HEADER, GET_ALL_JOBS } from "../actions/types/jobPostTypes";

const initialState = {
  currentPosting: {},
  currentListOfJobs: []
};

export default function JobPostingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_JOB_HEADER:
      const newJob = action.payload;
      state.currentPosting = newJob;
      return {
        ...state,
        currentPosting: action.payload,
      };
    case GET_ALL_JOBS:
      return {
        ...state,
        currentListOfJobs: action.payload,
      };
    default:
      return state;
  }
}
