import { ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from "./types/studentTypes";

export const addStudent = (data) => dispatch => {
    dispatch({
        type: ADD_STUDENT,
        payload: data
    });
}

export const removeStudent = (data) => dispatch => {
    dispatch({
        type: REMOVE_STUDENT,
        payload: data
    });
}

export const updateStudent = (data) => dispatch => {
    dispatch({
        type: UPDATE_STUDENT,
        payload: data
    });
}