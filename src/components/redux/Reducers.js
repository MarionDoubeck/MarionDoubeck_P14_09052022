import { IS_LOADING, LOADING_ERROR, DISPLAY_EMPLOYEES, ADD_EMPLOYEE } from "./Types";

const initialDataState = {
    isLoading: false, 
    error:'',
    employees: []
}

const dataReducer = (state = initialDataState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DISPLAY_EMPLOYEES:
            return {
                ...state,
                isLoading: false,
                error: '',
                employees: action.payload
            }
        case ADD_EMPLOYEE :
            return {
                ...state,
                isLoading: false,
                error: '',
                employees: action.payload.employees
            }
        default:
            return state
    }
}

export default dataReducer;