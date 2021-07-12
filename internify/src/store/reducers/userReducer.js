import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  GET_USERS,
} from "../actions/types/userTypes";

const initialState = {
  userList: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      const newUser1 = action.payload.user;
      return [...state, newUser1];

    case REMOVE_USER:
      return state.filter((user) => user.id !== action.payload.id);

    case UPDATE_USER:
      const userID = action.payload.id;
      state.filter((user) => user.id !== action.payload.id);
      const newUser2 = action.payload.user;
      newUser2.id = userID;
      return [...state, newUser2];

    case GET_USERS:
      initialState.userList = action.payload;
      return {
        ...state,
        studentList: initialState.studentList,
      };
    default:
      return state;
  }
}
