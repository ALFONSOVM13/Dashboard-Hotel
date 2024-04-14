import {
  GET_ALL_SERVICES,
  DELETE_SERVICE,
  PUT_SERVICE,
  POST_SERVICE,
} from "../Actions/actionsTypes";

const initialState = {
  allServices: [],
};

const servicesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SERVICES:
      return {
        ...state,
        allServices: [...payload],
      };
    case DELETE_SERVICE:
      return {
        ...state,
        allServices: [...payload],
      };
    case PUT_SERVICE:
      return {
        ...state,
        allServices: [...payload],
      };
    case POST_SERVICE:
      return {
        ...state,
        allServices: [...payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default servicesReducer;
