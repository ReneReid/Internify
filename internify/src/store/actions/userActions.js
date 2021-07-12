import axios from "axios";
import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  GET_USERS,
} from "./types/userTypes";

export const addUser = (data) => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: data,
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
