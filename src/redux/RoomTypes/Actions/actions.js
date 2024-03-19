import {
  GET_ALL_ROOMTYPES,
  DELETE_ROOMTYPE,
  PUT_ROOMTYPE,
  CREATE_ROOMTYPE,
} from "./actionsTypes";

import axios from "axios";

export const getAllRoomTypes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/roomTypes");
      dispatch({
        type: GET_ALL_ROOMTYPES,
        payload: response.data,
      });
    } catch (error) {
      throw new Error("Can't get room types");
    }
  };
};

export const deleteRoomType = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/roomTypes/${id}`
      );
      return dispatch({
        type: DELETE_ROOMTYPE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const putRoomType = (id, product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/roomTypes/${id}`,
        product
      );
      return dispatch({
        type: PUT_ROOMTYPE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const createRoomType = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/roomTypes",
        product
      );
      return dispatch({
        type: CREATE_ROOMTYPE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
