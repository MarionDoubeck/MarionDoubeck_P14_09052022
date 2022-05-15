import { displayEmployees } from '../redux/Actions'

export const callAPI = () => {
    return dispatch => {
        let employees = []
        const myData = localStorage.getItem('employees');
        if (myData){
            employees = JSON.parse(localStorage.getItem('employees'))
            dispatch(displayEmployees(employees))
        }
    }  
}