// bring together all reducers

import { combineReducers } from "redux";
import JobPostingReducer from "./jobPostingReducer";
import matchesReducer from "./matchesReducer";
import studentReducer from "./studentReducer";
import userReducer from "./userReducer";

export default combineReducers({
  jobs: JobPostingReducer,
  students: studentReducer,
  matches: matchesReducer,
  users: userReducer,
});
