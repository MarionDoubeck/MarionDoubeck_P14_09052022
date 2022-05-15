import { IS_LOADING, LOADING_ERROR, DISPLAY_EMPLOYEES, ADD_EMPLOYEE } from "./Types";

export const isLoading = () => {
    return {
        type: IS_LOADING,
    }
}

export const loadingError = error => {
    return {
        type: LOADING_ERROR,
        payload: error
    }
}

export const displayEmployees = (employees) => {
    return {
        type: DISPLAY_EMPLOYEES,
        payload: employees
    }
}

export const addEmployee = (employees) => {
    return {
        type: ADD_EMPLOYEE,
        payload: employees
    }
}