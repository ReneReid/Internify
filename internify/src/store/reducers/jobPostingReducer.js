import { ADD_JOB_HEADER } from "../actions/types/jobPostTypes";

const initialState = {
  currentPosting: {},
  finalJobPostingsList: [],
};

export default function JobPostingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_JOB_HEADER:
      return {
        ...state,
        currentPosting: action.payload,
      };
    default:
      return state;
  }
}
