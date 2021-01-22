import {
  SELECT_EMPLOYEE,
  UPDATE_INFO_EMPLOYEE,
  CREATE_NEW_EMPLOYEE,
  DELETE_EMPLOYEES,
} from "./types";

export const selectEmployee = payload => {
  return {
    type: SELECT_EMPLOYEE,
    payload,
  };
};

export const updateEmployeeInfo = payload => {
  return {
    type: UPDATE_INFO_EMPLOYEE,
    payload,
  };
};

export const createNewEmployee = () => {
  return {
    type: CREATE_NEW_EMPLOYEE,
  };
};

export const deleteEmployees = () => {
  return {
    type: DELETE_EMPLOYEES,
  };
};
