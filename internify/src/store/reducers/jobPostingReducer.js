import { ADD_JOB_HEADER, UPDATE_KEYS } from "../actions/types/jobPostTypes";

const initialState = {
  registeredKeys: {},
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
    case UPDATE_KEYS:
      return {
        ...state, 
        registeredKeys: {...state.registeredKeys, [action.payload.key]: action.payload.val}
      }
    default:
      return state;
  }
}
