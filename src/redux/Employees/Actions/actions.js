import {
  GET_ALL_EMPLOYEES,
  DELETE_EMPLOYEE,
  CREATE_EMPLOYEE,
  PUT_EMPLOYEE,
} from "./actionsTypes";
import axios from "axios";
import Cookies from "js-cookie";
const { VITE_BACKEND_URL } = import.meta.env;

export const getAllEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/auth/allUsers?role=employee`,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: response.data.users,
      });
    } catch (error) {
      throw new Error("Can not get all employees");
    }
  };
};

export const postEmployee = (id, employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}`, employee);
      return dispatch({
        type: CREATE_EMPLOYEE,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
