import {
  GET_ALL_RESERVATIONS,
  DELETE_RESERVATION,
  PUT_RESERVATION,
  CREATE_RESERVATION,
} from "./actionsTypes";

import axios from "axios";

export const getAllReservations = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/api/rooms");
      dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener alimentos.");
    }
  };
};

export const deleteReservation = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/rooms/${id}`
      );
      return dispatch({
        type: DELETE_RESERVATION,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const putReservation = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/rooms/${id}`,
        product
      );
      return dispatch({
        type: PUT_RESERVATION,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const createReservation = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/rooms",
        product
      );
      return dispatch({
        type: CREATE_RESERVATION,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
