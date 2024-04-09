import {
  GET_ALL_OFFERS,
  DELETE_OFFERS,
  PUT_OFFERS,
  POST_OFFERS,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllOffers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/offers`);
      dispatch({
        type: GET_ALL_OFFERS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener las ofertas.");
    }
  };
};

export const deleteOffer = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${VITE_BACKEND_URL}/api/offers/${id}`
      );
      return dispatch({
        type: DELETE_OFFERS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar eliminar la oferta.");
    }
  };
};

export const putOffer = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/api/offers/${id}`,
        product
      );

      return dispatch({
        type: PUT_OFFERS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const postOffer = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/offers`,
        product
      );

      return dispatch({
        type: POST_OFFERS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
