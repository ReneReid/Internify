import { NewReleasesTwoTone } from "@material-ui/icons";
import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
  GET_USERS,
  GET_USER,
  UPDATE_JOBS_OF_USER,
} from "../actions/types/userTypes";

const initialState = {
  userList: [],
  user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      const newUser = action.payload;
      state.user = newUser
      return {...state, user: state.user};

    // TODO: Fix this
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.payload.id);

    case UPDATE_USER:
      const updatedUser = action.payload;
      state.user = updatedUser;
      return {...state, user: state.user};

    case UPDATE_JOBS_OF_USER:
      const newJobs = action.payload.jobPostings;
      console.log(newJobs);
      state.user.jobPostings?.push(newJobs[0]);
      let uniqJobs = (arr) => arr.filter((v, i) => arr.indexOf(v) === i);
      console.log(uniqJobs(state.user.jobPostings));
      state.user.jobPostings = uniqJobs(state.user.jobPostings);
      return {...state, user: state.user};

    // TODO: Fix this
    case GET_USERS:
      initialState.userList = action.payload;
      return {
        ...state.userList
      };

    case GET_USER:
      const user = action.payload;
      state.user = user;
      return {...state, user: state.user};

    default:
      return state;
  }
}
