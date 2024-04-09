import {
  GET_ALL_ROOMTYPES,
  DELETE_ROOMTYPE,
  PUT_ROOMTYPE,
  CREATE_ROOMTYPE,
  GET_ROOMTYPE,
  CLEAR_ROOMTYPE,
} from "./actionsTypes";

import axios from "axios";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllRoomTypes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/api/roomstypes`);
      dispatch({
        type: GET_ALL_ROOMTYPES,
        payload: response.data,
      });
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getRoomType = (id = null) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/api/roomstypes${id ? `?id=${id}` : ""}`
      );

      dispatch({
        type: GET_ROOMTYPE,
        payload: response.data[0],
      });
    } catch (error) {
      throw new Error("Can't get room types");
    }
  };
};

export const deleteRoomType = (id) => {
  return async (dispatch) => {
    try {
      await axios
        .delete(`${VITE_BACKEND_URL}/api/roomstypes/${id}`, {
          data: {
            verification: "admin",
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      return dispatch({
        type: DELETE_ROOMTYPE,
        payload: id,
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
        `${VITE_BACKEND_URL}/api/roomstypes/${id}`,
        product
      );
      return dispatch({
        type: PUT_ROOMTYPE,
        payload: { ...product, id: id },
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
        `${VITE_BACKEND_URL}/api/roomstypes`,
        product
      );
      const { data } = response;

      return dispatch({
        type: CREATE_ROOMTYPE,
        payload: data.roomType,
      });
    } catch (error) {
      alert("The action wasn't completed: " + error.response.data.message);
    }
  };
};

export const clearRoomType = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_ROOMTYPE,
      payload: [],
    });
  };
};
