import axios from 'axios';
import { GET_ONE_JOB, GET_ALL_JOBS, ADD_JOB, DELETE_JOB } from "./types/jobPostTypes";
import { ADD_JOB_HEADER } from "./types/jobPostTypes";

export const getOneJob = (_id) => dispatch => {
  axios
      .get(`/api/jobs/getOne/${_id}`)
      .then(res => {
          dispatch({
              type: GET_ONE_JOB,
              payload: res.data
          })
      }
      )
};

export const getJobs = () => dispatch => {
  axios
      .get('/api/jobs/')
      .then(res => {
          dispatch({
              type: GET_ALL_JOBS,
              payload: res.data
          })
      }
      )
};

export const addNewJob = (job) => (dispatch) => {
  axios
    .post('/api/jobs/', job)
    .then(res => {
        dispatch({
            type: ADD_JOB,
            payload: res.data
        });
    });
};

export const deleteJob = (_id) => dispatch => {
  axios
      .delete(`/api/jobs/${_id}`)
      .then(() => {
          dispatch({
              type: DELETE_JOB,
              payload: _id
          });
      })
}

export const addJobsData = (data) => (dispatch) => {
    dispatch({
        type: ADD_JOB_HEADER,
        payload: data,
    });
};
