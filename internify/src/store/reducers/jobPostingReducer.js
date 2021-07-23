import { ADD_JOB_HEADER } from "../actions/types/jobPostTypes";

const initialState = {
  currentPosting: {},
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
    default:
      return state;
  }
}
