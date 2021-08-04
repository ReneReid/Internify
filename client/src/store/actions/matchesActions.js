import {
  PROCESS_MATCHES,
  ADD_MATCH,
  GET_MATCH,
  GET_MATCHES,
  DELETE_MATCH,
} from "./types/matchesTypes";
import axios from "axios";

export const processMatches = (data) => (dispatch) => {
  dispatch({
    type: PROCESS_MATCHES,
    payload: data,
  });
};

export const addMatch = (match) => (dispatch) => {
  axios
    .post("/api/matches/", match)
    .then((res) => {
      dispatch({
        type: ADD_MATCH,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

// Make a get request by id here
export const getMatch = (data) => (dispatch) => {
  axios
    .put(`/api/matches/${data.jobId}`)
    .then((res) => {
      dispatch({
        type: GET_MATCH,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

// Get all matches
export const getMatches = () => (dispatch) => {
  axios
    .get("/api/matches/")
    .then((res) => {
      dispatch({
        type: GET_MATCHES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

// Delete a match by id
export const deleteMatch = (data) => (dispatch) => {
  axios
    .delete(`/api/matches/${data.jobId}`)
    .then((res) => {
      dispatch({
        type: DELETE_MATCH,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
