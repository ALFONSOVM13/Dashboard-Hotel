import {
  GET_ALL_USERS,
  DELETE_USER,
  CREATE_USER,
  PUT_USER,
  EDIT_GUEST_STATE,
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

    case EDIT_GUEST_STATE:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
