import {
  GET_ALL_RESERVATIONS,
  DELETE_RESERVATION,
  PUT_RESERVATION,
  CREATE_RESERVATION,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllReservations = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/reservations`);

      dispatch({
        type: GET_ALL_RESERVATIONS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);

      throw new Error("Error de red al intentar obtener reservaciones.");
    }
  };
};

export const deleteReservation = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${VITE_BACKEND_URL}/api/reservations/${id}`
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
        `${VITE_BACKEND_URL}/api/reservations/${id}`,
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
      console.log(product);

      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/reservations`,
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
