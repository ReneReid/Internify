import { ADD_JOB_HEADER } from "../actions/types/jobPostTypes";

const intialState = {
  currentPosting: {},
  finalJobPostingList: [],
};

export default function JobPostingReducer(state = intialState, action) {
  switch(action.type) {
    case ADD_JOB_HEADER:
      return {
        ...state,
        currentPosting: action.payload,
      };
      default:
        return state;
  }
}
