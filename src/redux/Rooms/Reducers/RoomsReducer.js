import {
  GET_ROOM,
  GET_ALL_ROOMS,
  DELETE_ROOM,
  PUT_ROOM,
  CREATE_ROOM,
} from "../Actions/actionsTypes";

const initialState = {
  allRooms: [],
  selectedRoom: {},
};

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        allRooms: [...payload],
      };
    case GET_ROOM:
      return {
        ...state,
        selectedRoom: { ...payload },
      };

    case DELETE_ROOM:
      return {
        ...state,
        allRooms: [...state.allRooms.filter((room) => room.id !== payload.id)],
      };

    case PUT_ROOM:
      return {
        ...state,
        allRooms: [
          ...state.allRooms.map((room) =>
            Number(room.id) === payload.id ? payload : room
          ),
        ],
      };

    case CREATE_ROOM:
      return {
        ...state,
        allRooms: [...state.allRooms, payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default roomsReducer;
