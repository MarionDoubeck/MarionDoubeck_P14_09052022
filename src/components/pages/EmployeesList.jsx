import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callAPI } from '../services/callAPI'
import Table from '../utils/Table'


const EmployeesList = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.isLoading)
    const error = useSelector(state => state.error)
    let loadingMessages = (<></>)
    /**
     * load employees list from localStorage to redux store
     * then put this list from the store to the local const employees
     */
     useEffect( () => {
        dispatch(callAPI())
        if(loading){
          loadingMessages = (<div>Wait please ...</div>)
        }else if (error){
          loadingMessages = (<div>{error}</div>)
        }
      },[dispatch])
    const employees = useSelector(state => state.employees)
    

  return (
    <div className="employeesList">
        <h2>Current employees : </h2>
        <Table data={employees}/>
        {loadingMessages}
    </div>
  )
}

export default EmployeesList