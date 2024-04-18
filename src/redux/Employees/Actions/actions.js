import {
  GET_ALL_EMPLOYEES,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  CHANGE_EMPLOYEE_STATE,
  CREATE_EMPLOYEE,
  CHANGE_EMPLOYEE_STATUS,
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

export const getEmployee = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/auth/allUsers/${id}?role=employee`,
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      dispatch({
        type: GET_EMPLOYEE,
        payload: response.data.users[0],
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
export const changeEmployeeStatus = (id, state) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${VITE_BACKEND_URL}/auth/set-state/${id}`,
        {
          state: state,
        },
        {
          headers: { authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      return dispatch({
        type: CHANGE_EMPLOYEE_STATE,
        payload: response.data.user,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
