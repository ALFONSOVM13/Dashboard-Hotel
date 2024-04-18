import {
  GET_ALL_USERS,
  DELETE_USER,
  CREATE_USER,
  PUT_USER,
} from "../Actions/actionsTypes";

const initialState = {
  allUsers: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    case PUT_USER:
      return {
        ...state,
        allUsers: payload,
      };

    case DELETE_USER:
      return {
        ...state,
        allUsers: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
