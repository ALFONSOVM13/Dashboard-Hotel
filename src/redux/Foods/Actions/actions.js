import {
  GET_ALL_FOODS,
  DELETE_FOOD,
  PUT_FOOD,
  POST_FOOD,
} from "./actionsTypes";

import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;
export const getAllFoods = () => {
  return async (dispatch) => {
    try {
      let filteredData = [];
      const response = await axios.get(`${VITE_BACKEND_URL}/api/dishes`);

      if (response.data.message !== "No hay platos disponibles.")
        filteredData = response.data.dishes.map(
          ({ createdAt, updatedAt, ...rest }) => rest
        );
      dispatch({
        type: GET_ALL_FOODS,
        payload: filteredData,
      });
    } catch (error) {
      console.log(error);

      throw new Error("Error de red al intentar obtener alimentos.");
    }
  };
};

export const deleteFood = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${VITE_BACKEND_URL}/api/dishes/${id}`
      );
      const filteredData = await response.data.dishes.map(
        ({ createdAt, updatedAt, ...rest }) => rest
      );
      return dispatch({
        type: DELETE_FOOD,
        payload: filteredData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const putFood = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/api/dishes/${id}`,
        product
      );
      const filteredData = response.data.allDishes.map(
        ({ createdAt, updatedAt, ...rest }) => rest
      );
      return dispatch({
        type: PUT_FOOD,
        payload: filteredData,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const postFood = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${VITE_BACKEND_URL}/api/dishes`,
        product
      );
      const filteredData = response.data.allDishes.map(
        ({ createdAt, updatedAt, ...rest }) => rest
      );
      return dispatch({
        type: POST_FOOD,
        payload: filteredData,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
