import axios from "axios";
import { ADD_JOB_HEADER } from "./types/jobPostTypes";

export const getJob = (data) => async() => {
  const res = await axios
    .get(`/api/jobs/${data}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return res;
};

export const getBulkJobs = (data) => (dispatch) => {
  axios.get(`/api/jobs/bulk`).then((res) => {
    //TODO: Calling the action only returns the promise
  });
};

export const getJobs = () => (dispatch) => {
  axios.get("/api/jobs/").then((res) => {
    // dispatch({
    //   type: GET_ALL_JOBS,
    //   payload: res.data,
    // });
  });
};

export const addJob = (job) => (dispatch) => {
  axios.post("/api/jobs/", job).then((res) => {
    dispatch({
      type: ADD_JOB_HEADER,
      payload: res.data,
    });
  });
};

export const deleteJob = (_id) => (dispatch) => {
  axios.delete(`/api/jobs/${_id}`).then(() => {
    // dispatch({
    //   type: DELETE_JOB,
    //   payload: _id,
    // });
  });
};

export const addJobsData = (data) => (dispatch) => {
  // TODO: Refactor reducer type to update job header
  dispatch({
    type: ADD_JOB_HEADER,
    payload: data,
  });
};
