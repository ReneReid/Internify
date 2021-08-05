import {
  ADD_JOB_HEADER,
  GET_ALL_JOBS,
  UPDATE_KEYS,
  RESET_KEY,
} from "../actions/types/jobPostTypes";

const initialState = {
  registeredKeys: {},
  currentPosting: {},
  currentListOfJobs: [],
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
    case UPDATE_KEYS:
      return {
        ...state,
        registeredKeys: {
          ...state.registeredKeys,
          [action.payload.key]: action.payload.val,
        },
      };
    case RESET_KEY:
      return {
        ...state,
        registeredKeys: {},
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
