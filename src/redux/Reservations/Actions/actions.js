import {
  GET_ALL_ROOMS,
  DELETE_ROOM,
  PUT_ROOM,
  CREATE_ROOM,
} from "./actionsTypes";

import axios from "axios";

export const getAllRooms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/api/rooms");
      dispatch({
        type: GET_ALL_ROOMS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener alimentos.");
    }
  };
};

export const deleteRoom = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/rooms/${id}`
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
        `http://localhost:3001/api/rooms/${id}`,
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
        "http://localhost:3001/api/rooms",
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
