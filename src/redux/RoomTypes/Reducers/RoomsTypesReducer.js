import {
  GET_ALL_ROOMTYPES,
  DELETE_ROOMTYPE,
  PUT_ROOMTYPE,
  CREATE_ROOMTYPE,
} from "../Actions/actionsTypes";

const initialState = {
  allRoomTypes: [],
};

const roomTypesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ROOMTYPES:
      return {
        ...state,
        allRoomTypes: payload,
      };

    case DELETE_ROOMTYPE:
      return {
        ...state,
        allRoomTypes: [
          ...state.allRoomTypes.filter((roomType) => roomType.id !== payload),
        ],
      };

    case PUT_ROOMTYPE:
      return {
        ...state,
        allRoomTypes: payload,
      };

    case CREATE_ROOMTYPE:
      return {
        ...state,
        allRoomTypes: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default roomTypesReducer;
