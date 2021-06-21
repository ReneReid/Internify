// bring together all reducers

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import JobPostingReducer from './JobPostingReducer';

export default combineReducers({
    user: userReducer,
    jobPostReducer: JobPostingReducer
});
