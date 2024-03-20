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
      const response = await axios.get("http://localhost:3001/api/dishes");
      const filteredData = response.data.map(
        ({ createdAt, updatedAt, ...rest }) => rest
      );
      dispatch({
        type: GET_ALL_FOODS,
        payload: filteredData,
      });
    } catch (error) {
      throw new Error("Error de red al intentar obtener alimentos.");
    }
  };
};

export const deleteFood = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/dishes/${id}`
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
        `https://localhost:3001/api/dishes/${id}`,
        product
      );
      const filteredData = response.data.dishes.map(
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
        "http://localhost:3001/api/dishes",
        product
      );
      const filteredData = response.data.map(
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
