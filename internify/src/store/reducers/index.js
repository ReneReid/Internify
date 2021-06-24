// bring together all reducers

import { combineReducers } from 'redux';
import JobPostingReducer from './jobPostingReducer';

export default combineReducers({
    jobs: JobPostingReducer
});
