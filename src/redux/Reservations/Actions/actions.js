import Cookies from "js-cookie";
import {
  GET_ALL_RESERVATIONS,
  DELETE_RESERVATION,
  GET_RESERVATION,
  PUT_RESERVATION,
  CREATE_RESERVATION,
  CHECKIN_RESERVATION,
  CHECKOUT_RESERVATION,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllReservations = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/reservations`, {
        headers: { authorization: `Bearer ${Cookies.get("token")}` },
      });

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

export const getReservation = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/api/reservations/${id}`,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );

      dispatch({
        type: GET_RESERVATION,
        payload: response.data[0],
      });
    } catch (error) {
      console.log(error);

      throw new Error("Error de red al intentar obtener la reservacion.");
    }
  };
};

export const deleteReservation = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${VITE_BACKEND_URL}/api/reservations/${id}`,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      console.log(response.data.reservation);
      return dispatch({
        type: DELETE_RESERVATION,
        payload: response.data.reservation,
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
        product,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
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

export const checkInReservation = (reservation_number) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/reservations/checkin`,
        { reservation_number },
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      return dispatch({
        type: CHECKIN_RESERVATION,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const checkOutReservation = (reservation_number) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/reservations/checkout`,
        { reservation_number },
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      return dispatch({
        type: CHECKOUT_RESERVATION,
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
        product,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
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
