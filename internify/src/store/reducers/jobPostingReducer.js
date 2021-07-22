import { ADD_JOB_HEADER, GET_JOB } from "../actions/types/jobPostTypes";

const initialState = {
  currentPosting: {},
  finalJobPostingsList: [],
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
    case GET_JOB:
      console.log(action.payload);
      return {
        ...state,
        currentPosting: action.payload
      };
    default:
      return state;
  }
}
