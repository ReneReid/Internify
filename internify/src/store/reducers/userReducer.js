import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  GET_USERS,
  GET_USER,
} from "../actions/types/userTypes";

const initialState = {
  userList: [],
  user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      const newUser = action.payload;
      state.userList.push(newUser);
      state.user = newUser
      return {...state, user: state.user};

    // TODO: Fix this
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.payload.id);

    // TODO: Fix this
    case UPDATE_USER:
      const userID = action.payload.id;
      state.filter((user) => user.id !== action.payload.id);
      const newUser2 = action.payload.user;
      newUser2.id = userID;
      return [...state, newUser2];

    // TODO: Fix this
    case GET_USERS:
      initialState.userList = action.payload;
      return {
        ...state.userList
      };

    // TODO: Fix this
    case GET_USER:
      const userId = action.payload.authId;
      const user = state.userList.filter((user) => user.id !== userId);
      return [user];

    default:
      return state;
  }
}
