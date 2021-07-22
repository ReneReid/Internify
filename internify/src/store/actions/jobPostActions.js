import axios from "axios";
import {
  GET_JOB,
  GET_BULK_JOBS,
  GET_ALL_JOBS,
  ADD_JOB,
  DELETE_JOB,
} from "./types/jobPostTypes";
import { ADD_JOB_HEADER } from "./types/jobPostTypes";

export const getJob = (data) => (dispatch) => {
  axios
    .get(`/api/jobs/${data}`)
    .then((res) => {
      dispatch({
        type: GET_JOB,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

export const getBulkJobs = (data) => (dispatch) => {
  axios.get(`/api/jobs/bulk`).then((res) => {
    dispatch({
      type: GET_BULK_JOBS,
      payload: res.data,
    });
  });
};

export const getJobs = () => (dispatch) => {
  axios.get("/api/jobs/").then((res) => {
    dispatch({
      type: GET_ALL_JOBS,
      payload: res.data,
    });
  });
};

export const addJob = (job) => (dispatch) => {
  axios.post("/api/jobs/", job).then((res) => {
    dispatch({
      type: ADD_JOB,
      payload: res.data,
    });
  });
};

export const deleteJob = (_id) => (dispatch) => {
  axios.delete(`/api/jobs/${_id}`).then(() => {
    dispatch({
      type: DELETE_JOB,
      payload: _id,
    });
  });
};

export const addJobsData = (data) => (dispatch) => {
  dispatch({
    type: ADD_JOB_HEADER,
    payload: data,
  });
};
