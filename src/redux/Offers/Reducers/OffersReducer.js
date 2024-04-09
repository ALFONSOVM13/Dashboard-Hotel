import {
  GET_ALL_OFFERS,
  DELETE_OFFERS,
  PUT_OFFERS,
  POST_OFFERS,
} from "../Actions/actionsTypes";

const initialState = {
  allOffers: [],
};

const offersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_OFFERS:
      return {
        ...state,
        allOffers: [...payload],
      };

    case DELETE_OFFERS:
      return {
        ...state,
        allOffers: [...payload],
      };

    case PUT_OFFERS:
      return {
        ...state,
        allOffers: payload,
      };

    case POST_OFFERS:
      return {
        ...state,
        allOffers: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default offersReducer;
