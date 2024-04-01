import {
  GET_ALL_ROOMTYPES,
  DELETE_ROOMTYPE,
  PUT_ROOMTYPE,
  CREATE_ROOMTYPE,
  GET_ROOMTYPE,
  CLEAR_ROOMTYPE,
} from "../Actions/actionsTypes";

const initialState = {
  allRoomTypes: [],
  selectedRoomType: {},
};

const roomTypesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ROOMTYPES:
      return {
        ...state,
        allRoomTypes: payload,
      };
    case GET_ROOMTYPE:
      return {
        ...state,
        selectedRoomType: payload,
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
        allRoomTypes: [
          ...state.allRoomTypes.map((toUpdate) =>
            toUpdate.id === payload.id ? payload : toUpdate
          ),
        ],
      };

    case CREATE_ROOMTYPE:
      return {
        ...state,
        allRoomTypes: [...state.allRoomTypes, payload],
      };

    case CLEAR_ROOMTYPE:
      return {
        ...state,
        selectedRoomType: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default roomTypesReducer;
