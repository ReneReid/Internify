import { ADD_JOB_HEADER } from "./types/jobPostTypes";

export const addJobsData = (data) => (dispatch) => {
  dispatch({
    type: ADD_JOB_HEADER,
    payload: data,
  });
};
