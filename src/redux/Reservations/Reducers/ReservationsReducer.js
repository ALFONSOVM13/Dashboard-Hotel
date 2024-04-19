import {
  GET_ALL_RESERVATIONS,
  DELETE_RESERVATION,
  PUT_RESERVATION,
  CREATE_RESERVATION,
  GET_RESERVATION,
  CHECKIN_RESERVATION,
  CHECKOUT_RESERVATION,
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
        allReservations: [
          ...state.allReservations.filter(
            (res) => Number(res.id) !== Number(payload)
          ),
        ],
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

    case CHECKIN_RESERVATION:
      return {
        ...state,
        allReservations: [
          ...state.allReservations.map((res) =>
            res.reservation_number === payload.reservation_number
              ? payload
              : res
          ),
        ],
      };
    case CHECKOUT_RESERVATION:
      return {
        ...state,
        allReservations: [
          ...state.allReservations.map((res) =>
            res.reservation_number === payload.reservation_number
              ? payload
              : res
          ),
        ],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reservationsReducer;
