import { PROCESS_MATCHES } from "./types/matchesTypes";

export const processMatches = (data) => dispatch => {
    dispatch({
        type: PROCESS_MATCHES,
        payload: data
    });
}

