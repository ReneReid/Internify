import axios from "axios";
import qs from "qs";
import { ADD_JOB_HEADER, GET_ALL_JOBS, UPDATE_KEYS, RESET_KEY } from "./types/jobPostTypes";

export const getJob = (data) => async() => {
  const res = await axios
    .get(`/api/jobs/${data}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return res;
};

export const getJobs = (user) => (dispatch) => {
  const jobIds = user.jobPostings;
      axios
        .get("/api/jobs/bulk", {
          params: { data: jobIds },
          paramsSerializer: (params) => {
            return qs.stringify(params);
          },
        })
        .then((res) => {
          dispatch({
            type: GET_ALL_JOBS,
            payload: res.data[0],
          });
        })
        .catch((err) => console.error(err));
};

export const addJob = (job) => (dispatch) => {
  axios.post("/api/jobs/", job).then((res) => {
    dispatch({
      type: ADD_JOB_HEADER,
      payload: res.data,
    });
  });
};

export const deleteJob = (jobId) => (dispatch) => {
  axios.delete(`/api/jobs/${jobId}`).then(() => {
  }).catch((err) => console.error(err));
};

export const addJobsData = (data) => (dispatch) => {
  // TODO: Refactor reducer type to update job header
  dispatch({
    type: ADD_JOB_HEADER,
    payload: data,
  });
};

export const updateRegKeys = (key, val) => (dispatch) => {
  dispatch({
    type: UPDATE_KEYS,
    payload: {key: key, val: val},
  });
}

export const resetKey = () => (dispatch) => {
  dispatch({
    type: RESET_KEY,
  });
}

