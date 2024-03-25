import {
  GET_ALL_ROOMS,
  DELETE_ROOM,
  PUT_ROOM,
  CREATE_ROOM,
} from "../Actions/actionsTypes";

const initialState = {
  allRooms: [],
};

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        allRooms: [...payload],
      };

    case DELETE_ROOM:
      return {
        ...state,
        allRooms: payload,
      };

    case PUT_ROOM:
      return {
        ...state,
        allRooms: payload,
      };

    case CREATE_ROOM:
      return {
        ...state,
        allRooms: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default roomsReducer;
