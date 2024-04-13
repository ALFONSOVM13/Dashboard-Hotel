import {
  GET_ALL_USERS,
  DELETE_USER,
  CREATE_USER,
  PUT_USER,
} from "./actionsTypes";
import axios from "axios";
import Cookies from "js-cookie";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${VITE_BACKEND_URL}/auth/allUsers`, {
        headers: { authorization: `Bearer ${Cookies.get("token")}` },
      });
      dispatch({
        type: GET_ALL_USERS,
        payload: response.data.users,
      });
    } catch (error) {
      throw new Error("Can not get all users");
    }
  };
};

export const postUser = (is, user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}`, user);
      return dispatch({
        type: PUT_USER,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
