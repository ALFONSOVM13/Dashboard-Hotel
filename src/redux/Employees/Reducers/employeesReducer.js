import {
  GET_ALL_EMPLOYEES,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  CREATE_EMPLOYEE,
  PUT_EMPLOYEE,
  CHANGE_EMPLOYEE_STATUS,
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

    case CHANGE_EMPLOYEE_STATUS:
      return {
        ...state,
        allEmployees: status.allEmployees.map((employee) =>
          employee.id === payload.id
            ? { ...employee, status: !employee.status }
            : employee
        ),
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
