import {
  GET_ALL_ROOMS,
  DELETE_ROOM,
  PUT_ROOM,
  CREATE_ROOM,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllRooms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/rooms`);
      console.log(response);

      const orderedResponse = response.data.map((room) => ({
        id: room.id,
        description: room.description,
        is_active: room.is_active,
        max_capacity: room.max_capacity,
        photo_url: room.photo_url,
        price_per_night: room.price_per_night,
        room_number: room.room_number,
        room_type: room.room_type.name,
        status: room.status,
      }));

      // room_detail
      // :
      // {id: 3, room_id: 4, photos: Array(2), single_bed: 2, double_bed: 0, …}
      // room_number
      // :
      // "103"
      // room_type
      // :
      // {id: 2, name: 'Standard King', description: 'The Standard King Room is designed to accommodate … couples seeking a spacious and comfortable stay.', createdAt: '2024-03-22T02:32:41.015Z', updatedAt: '2024-03-22T02:32:41.015Z'}
      // status
      // :
      // "available"
      // type_id

      dispatch({
        type: GET_ALL_ROOMS,
        payload: orderedResponse,
      });
    } catch (error) {
      throw new Error("Can't obtain Rooms.");
    }
  };
};

export const deleteRoom = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${VITE_BACKEND_URL}/api/rooms/${id}`
      );
      return dispatch({
        type: DELETE_ROOM,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const putRoom = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${VITE_BACKEND_URL}/api/rooms/${id}`,
        product
      );
      return dispatch({
        type: PUT_ROOM,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const createRoom = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/rooms`,
        product
      );
      return dispatch({
        type: CREATE_ROOM,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
