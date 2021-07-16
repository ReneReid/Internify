import axios from "axios";
import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  GET_USERS,
  GET_USER,
} from "./types/userTypes";

export const addUser = (data) => (dispatch) => {
  axios
    .post(`/api/users/`, data)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch(err => {
      console.error(err);
    });
};

export const removeUser = (data) => (dispatch) => {
  dispatch({
    type: REMOVE_USER,
    payload: data,
  });
};

export const updateUser = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload: data,
  });
};

export const getUsers = (data) => (dispatch) => {
  axios.get("api/users/").then((res) => {
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  });
};

export const getUser = (data) => (dispatch) => {
  axios.get(`api/users/${data}`).then((res) => {
    dispatch({
      type: GET_USER,
      payload: res.data[0],
    });
  });
};

