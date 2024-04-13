import {
  GET_ALL_SERVICES,
  DELETE_SERVICE,
  PUT_SERVICE,
  POST_SERVICE,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllServices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/services`);
      dispatch({
        type: GET_ALL_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener los servicios.");
    }
  };
};

export const deleteService = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${VITE_BACKEND_URL}/api/services/${id}`
      );
      return dispatch({
        type: DELETE_SERVICE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar eliminar el plato.");
    }
  };
};

export const putService = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/api/services/${id}`,
        product
      );
      return dispatch({
        type: PUT_SERVICE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const postService = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/services`,
        product
      );

      return dispatch({
        type: POST_SERVICE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
