import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callAPI } from '../services/callAPI'
import Table from '../utils/Table'


const EmployeesList = () => {
    const dispatch = useDispatch()
    /**
     * load employees list from localStorage to redux store
     * then put this list from the store to the local const employees
     */
     useEffect( () => {
        dispatch(callAPI())
      },[dispatch])
    const employees = useSelector(state => state.employees)

  return (
    <div className="employeesList">
        <h2>Current employees : </h2>
        <Table data={employees}/>
    </div>
  )
}

export default EmployeesList