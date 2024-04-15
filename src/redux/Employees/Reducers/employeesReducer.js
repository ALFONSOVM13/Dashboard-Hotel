import {
  GET_ALL_EMPLOYEES,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  CREATE_EMPLOYEE,
  PUT_EMPLOYEE,
} from "../Actions/actionsTypes";

const initialState = {
  allEmployees: [],
  selectedEmployee: {},
};

const employeesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        allEmployees: payload,
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: payload,
      };

    case CREATE_EMPLOYEE:
      return {
        ...state,
        allEmployees: payload,
      };

    case PUT_EMPLOYEE:
      return {
        ...state,
        allEmployees: payload,
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        allEmployees: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default employeesReducer;
