import {
  SELECT_EMPLOYEE,
  UPDATE_INFO_EMPLOYEE,
  CREATE_NEW_EMPLOYEE,
  DELETE_EMPLOYEES
} from "./types";

const initialState = {
  employees: [],
  selectedEmployee: {
    id: 0,
    name: "",
    position: "",
    birthday: "",
    fired: false,
    disable: true,
  },
};

export const rootReducer = (state = initialState, action) => {
  const { employees } = state;
  switch (action.type) {
    case SELECT_EMPLOYEE:
      let selectedEmployee = employees.find(employee => employee.id === action.payload.id);
      selectedEmployee.selected = !selectedEmployee.selected

      return {...state, selectedEmployee: { ...action.payload, disable: false}};
    case UPDATE_INFO_EMPLOYEE:
      const test = Object.keys(action.payload);
      let employee = employees.find( employee => employee.id === action.payload.id);
      employee[test[0]] = action.payload[test[0]];

      return { ...state };
    case CREATE_NEW_EMPLOYEE:
      const formToEmployee = {id: Date.now(), name: "", position: "Дизигнер", birthday: "", fired: false, disable: false, selected: true};

      return {...state, selectedEmployee: {...formToEmployee}, employees: state.employees.concat(formToEmployee)};
    case DELETE_EMPLOYEES:
      const filteredState = state.employees.filter(elem => elem.selected !== true)
      const selectedEmplDel = { id: 0, name: "", position: "", birthday: "", fired: false, disable: true}

      return {...state, employees: filteredState, selectedEmployee: selectedEmplDel}
    default:
      return state;
  }
};
