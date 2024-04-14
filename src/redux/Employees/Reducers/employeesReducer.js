import {
  GET_ALL_EMPLOYEES,
  DELETE_EMPLOYEE,
  CREATE_EMPLOYEE,
  PUT_EMPLOYEE,
} from "../Actions/actionsTypes";

const initialState = {
  allEmployees: [],
};

const employeesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        allEmployees: payload,
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
