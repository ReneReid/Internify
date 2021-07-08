import axios from 'axios';
import { ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT, GET_STUDENTS} from "./types/studentTypes";

export const addStudent = (data) => (dispatch) => {
  dispatch({
    type: ADD_STUDENT,
    payload: data,
  });
};

export const removeStudent = (data) => (dispatch) => {
  dispatch({
    type: REMOVE_STUDENT,
    payload: data,
  });
};

export const updateStudent = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_STUDENT,
    payload: data,
  });
};

export const getStudents = () => dispatch => {
  axios
      .get('/api/students/')
      .then(res => {
          dispatch({
              type: GET_STUDENTS,
              payload: res.data
          })
      }
      )
};