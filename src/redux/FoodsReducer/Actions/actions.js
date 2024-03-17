import {
  GET_ALL_FOODS,
  DELETE_FOOD,
  PUT_FOOD,
  POST_FOOD,
} from "./actionsTypes";

import axios from "axios";

export const getAllFoods = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/api/menu");
      dispatch({
        type: GET_ALL_FOODS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener alimentos.");
    }
  };
};

export const deleteFood = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/menu/${id}`
      );
      return dispatch({
        type: DELETE_FOOD,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const putFood = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/menu/${id}`,
        product
      );
      return dispatch({
        type: PUT_FOOD,
        payload: response.data,
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
        "http://localhost:3001/api/menu",
        product
      );
      return dispatch({
        type: POST_FOOD,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
