import {
  GET_ALL_SERVICES,
  DELETE_CAR,
  PUT_CAR,
  POST_CAR,
  GET_ALL_CARS,
  GET_ALL_SPA,
  POST_SPA,
} from "../Actions/actionsTypes";

const initialState = {
  allServices: [],
  carServices: [],
  spaServices: [],
};

const servicesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CARS:
      return {
        ...state,
        carServices: [...payload],
      };
    case GET_ALL_SPA:
      return {
        ...state,
        spaServices: [...payload],
      };
    case PUT_CAR:
      return {
        ...state,
        carServices: [...payload],
      };
    case GET_ALL_SERVICES:
      return {
        ...state,
        allServices: [...payload],
      };
    case DELETE_CAR:
      return {
        ...state,
        carServices: [...payload],
      };

    case POST_CAR:
      return {
        ...state,
        carServices: [...state.carServices, payload],
      };

    case POST_SPA:
      return {
        ...state,
        spaServices: [...payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default servicesReducer;
