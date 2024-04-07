import { SET_SESSION, UNSET_SESSION } from "../Actions/actionsTypes";

const initialState = {
  loggedUser: {
    username: "",
    email: "",
    role: "",
  },
  selectedRoomType: {},
};

const roomTypesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SESSION:
      return {
        ...state,
        loggedUser: payload,
      };
    case UNSET_SESSION:
      return {
        ...state,
        loggedUser: initialState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default roomTypesReducer;
