import { ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT, GET_STUDENTS } from "../actions/types/studentTypes";

const initialState = {
  studentList: [],
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const newStudent1 = action.payload.student;
      return [...state, newStudent1];

    case REMOVE_STUDENT:
      return state.filter((student) => student.id !== action.payload.id);

    case UPDATE_STUDENT:
      const studentID = action.payload.id;
      state.filter((student) => student.id !== action.payload.id);
      const newStudent2 = action.payload.student;
      newStudent2.id = studentID;
      return [...state, newStudent2];

    case GET_STUDENTS: 
      initialState.studentList = action.payload;
      return {
          ...state, 
          studentList: initialState.studentList
      }

    default:
      return state;
  }
}
