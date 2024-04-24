import {
  GET_ALL_USERS,
  DELETE_USER,
  CREATE_USER,
  PUT_USER,
  EDIT_GUEST_STATE,
} from "./actionsTypes";
import axios from "axios";
import Cookies from "js-cookie";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/auth/allUsers?role=customer`,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      dispatch({
        type: GET_ALL_USERS,
        payload: response.data.users,
      });
    } catch (error) {
      throw new Error("Can not get all users");
    }
  };
};

export const postUser = async (token, id, user) => {
  try {
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }
    const response = await axios.put(
      `${VITE_BACKEND_URL}/auth/profile/${id}`,
      formData,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const editGuestState = (id, state) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/auth/set-state/${id}`,
        { state: state },
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      return dispatch({
        type: EDIT_GUEST_STATE,
        payload: response.data.user,
      });
    } catch (error) {}
  };
};
