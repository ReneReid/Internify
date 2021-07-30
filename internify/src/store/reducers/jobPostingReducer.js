import { ADD_JOB_HEADER, GET_ALL_JOBS, UPDATE_KEYS, RESET_KEY, UPDATE_BOX } from "../actions/types/jobPostTypes";

const initialState = {
  checkedBoxes: {
    "Internship": false,
    "Coop": false,
    "NewGrad": false,
    "PartTime": false,
    "Java": false,
    "JavaScript": false,
    "C++": false,
    "C": false,
    "React": false,
    "Angular": false,
    "HTML": false,
    "CSS": false,
    "Jira": false,
    "Asana": false,
    "Confluence": false,
    "Notion": false,
    "Object Oriented Programming": false,
    "Functional Programming": false,
    "Recursion": false,
    "Associate's Degree": false,
    "Bachelor's Degree": false,
    "Master's Degree": false,
    "Ph.D": false,
    "Diploma": false,
    "Certification": false
  },
  registeredKeys: {},
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
    case UPDATE_KEYS:
      return {
        ...state, 
        registeredKeys: {...state.registeredKeys, [action.payload.key]: action.payload.val}
      }
    case RESET_KEY: 
      return {
        ...state, 
        registeredKeys: {}
      }
    case GET_ALL_JOBS:
      return {
        ...state,
        currentListOfJobs: action.payload,
      };
    case UPDATE_BOX: 
      return {
        ...state, 
        checkedBoxes: {...state.checkedBoxes, [action.payload]: !state.checkedBoxes[action.payload]}
      }
    default:
      return state;
  }
}
