import {
  GET_ALL_ROOMTYPES,
  DELETE_ROOMTYPE,
  PUT_ROOMTYPE,
  CREATE_ROOMTYPE,
  GET_ROOMTYPE,
} from "./actionsTypes";

import axios from "axios";
const url = "http://localhost:3001";

export const getAllRoomTypes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/roomTypes`);
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
      const response = await axios
        .delete(`${url}/roomTypes/${id}`, {
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
      const response = await axios.put(`${url}/roomTypes/${id}`, product);
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
      const response = await axios.post(`${url}/roomTypes`, product);
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
