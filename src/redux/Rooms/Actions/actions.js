import {
  GET_ALL_ROOMS,
  DELETE_ROOM,
  PUT_ROOM,
  CREATE_ROOM,
  GET_ROOM,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllRooms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/rooms`);
      const orderedResponse = response.data.map((room) =>
        normalizeResponse(room)
      );

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
export const getRoom = (roomId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/api/rooms/${roomId}`
      );

      const room = response.data;

      const orderedResponse = normalizeResponse(room);

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
        type: GET_ROOM,
        payload: orderedResponse,
      });
    } catch (error) {
      throw new Error("Can't obtain Room.");
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

export const patchRoom = (id, product) => {
  return async (dispatch) => {
    const {
      id,
      is_active,
      max_capacity,
      photo_url,
      price_per_night,
      room_number,
      room_type,
      services,
      status,
    } = product;
    const { id: type_id } = room_type;
    const {
      single_bed,
      double_bed,
      air_conditioning,
      jacuzzi,
      internet_connection,
      minibar,
      phone,
      tv,
    } = services;
    const roomData = {
      id,
      room_number,
      type_id,
      photo_url,
      status,
      price_per_night: parseFloat(price_per_night),
      max_capacity: Number(max_capacity),
      is_active,
    };
    const roomDetailsData = {
      room_id: id,
      single_bed: Number(single_bed),
      double_bed: Number(double_bed),
      air_conditioning,
      jacuzzi,
      internet_connection,
      tv,
      minibar,
      phone,
    };

    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/api/rooms/${id}`,
        {
          roomData,
          roomDetailsData,
        }
      );
      console.log(response.data);

      return dispatch({
        type: PUT_ROOM,
        payload: normalizeResponse(response.data[0]),
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
        payload: normalizeResponse(response.data[0]),
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

const normalizeResponse = (room) => {
  return {
    id: room.id,
    is_active: room.is_active,
    max_capacity: room.max_capacity,
    photo_url: room.photo_url,
    price_per_night: room.price_per_night,
    room_number: room.room_number,
    room_type: {
      id: room.type_id,
      name: room.room_type.name,
      description: room.description,
    },
    status: room.status,
    services: {
      single_bed: room.room_detail.single_bed,
      double_bed: room.room_detail.double_bed,
      air_conditioning: room.room_detail.air_conditioning,
      jacuzzi: room.room_detail.jacuzzi,
      internet_connection: room.room_detail.internet_connection,
      tv: room.room_detail.tv,
      minibar: room.room_detail.minibar,
      phone: room.room_detail.phone,
    },
  };
};
