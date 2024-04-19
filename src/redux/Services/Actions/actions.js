import {
  GET_ALL_SERVICES,
  DELETE_CAR,
  PUT_CAR,
  POST_CAR,
  GET_ALL_CARS,
  GET_ALL_SPA,
  DELETE_SPA,
  PUT_SPA,
  POST_SPA,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getCarServices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/cars`);
      const nuevoArray = response.data.map((objeto) => {
        const { createdAt, updatedAt, ...resto } = objeto;
        return resto;
      });
      dispatch({
        type: GET_ALL_CARS,
        payload: nuevoArray,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener los servicios.");
    }
  };
};

export const getSpaServices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/spa`);
      const nuevoArray = response.data.map((objeto) => {
        const { createdAt, updatedAt, ...resto } = objeto;
        return resto;
      });
      dispatch({
        type: GET_ALL_SPA,
        payload: nuevoArray,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener los servicios.");
    }
  };
};

export const patchCar = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/api/cars/${id}`,
        product
      );
      return dispatch({
        type: PUT_CAR,
        payload: response.data.allCars,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

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

export const deleteCar = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${VITE_BACKEND_URL}/api/cars/${id}`);
      dispatch({
        type: DELETE_CAR,
        payload: response.data.car_details,
      });
    } catch (error) {
      throw new Error("Error de red al intentar eliminar el auto.");
    }
  };
};

export const postCar = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/cars`,
        product
      );

      return dispatch({
        type: POST_CAR,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const postSpa = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/api/spa`, product);
      console.log(response.data.allRoomSpa);
      return dispatch({
        type: POST_SPA,
        payload: response.data.allRoomSpa,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const deleteSpa = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${VITE_BACKEND_URL}/api/spa/${id}`);
      dispatch({
        type: DELETE_SPA,
        payload: response.data.car_details,
      });
    } catch (error) {
      throw new Error("Error de red al intentar eliminar el auto.");
    }
  };
};
