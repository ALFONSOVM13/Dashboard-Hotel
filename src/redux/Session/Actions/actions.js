import { SET_SESSION, UNSET_SESSION } from "./actionsTypes";

export const setSession = (sessionData) => {
  return async (dispatch) => {
    dispatch({
      type: SET_SESSION,
      payload: sessionData,
    });
  };
};
