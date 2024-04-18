import {
  GET_ALL_RESERVATIONS,
  DELETE_RESERVATION,
  PUT_RESERVATION,
  CREATE_RESERVATION,
  GET_RESERVATION,
} from "../Actions/actionsTypes";

const initialState = {
  allReservations: [],
  selectedReservation: {},
};

const reservationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESERVATIONS:
      return {
        ...state,
        allReservations: payload,
      };
    case GET_RESERVATION:
      return {
        ...state,
        selectedReservation: payload,
      };

    case DELETE_RESERVATION:
      return {
        ...state,
        allReservations: payload,
      };

    case PUT_RESERVATION:
      return {
        ...state,
        allReservations: payload,
      };

    case CREATE_RESERVATION:
      return {
        ...state,
        allReservations: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reservationsReducer;
