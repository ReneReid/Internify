import { PROCESS_MATCHES, ADD_MATCH } from "./types/matchesTypes";
import axios from "axios";

export const processMatches = (data) => (dispatch) => {
  dispatch({
    type: PROCESS_MATCHES,
    payload: data,
  });
};

export const addMatch = (match) => (dispatch) => {
  axios.put("/api/matches/", match).then((res) => {
    dispatch({
      type: ADD_MATCH,
      payload: res.data,
    });
  });
};
