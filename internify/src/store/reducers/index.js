// bring together all reducers

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import JobPostingReducer from './jobPostingReducer';

export default combineReducers({
    user: userReducer,
    jobs: JobPostingReducer
});
