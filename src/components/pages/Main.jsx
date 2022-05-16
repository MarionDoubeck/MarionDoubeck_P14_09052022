import { useState} from 'react'
import {useDispatch} from 'react-redux'
//import Select from '../utils/Select'
import Select from 'doubeck-react-select'
import { departments } from '../data/wealthHealthDepartments'
import { usaStates } from '../data/usaStates'
import PopIn from '../utils/PopIn'
import { addEmployee } from '../redux/Actions'
import DatePicker from '../utils/DatePicker'
import { postAPI } from '../services/callAPI'


const Main = () => {
    
    const dispatch = useDispatch()
    const initialState = {
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: ''
    }
    
    const [employeeData, setEmployeeData] = useState(initialState);
    const [popInMode, setPopInMode] = useState('hide')
    
    const updateState = (newState, name) => {
        setEmployeeData({...employeeData, [name]: newState})
    }
    const updatePopin = (newMode) => {
        setPopInMode(newMode)
    }

    const saveEmployee = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || []
        const employee = {
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            dateOfBirth: employeeData.birthDate,
            startDate: employeeData.startDate,
            department: employeeData.department,
            street: employeeData.street,
            city: employeeData.city,
            state: employeeData.state,
            zipCode: employeeData.zipCode
        };
        employees.push(employee);
        postAPI(employees)
        dispatch(addEmployee(employees))
    }

    const validate = (e) => {
        e.preventDefault()
        saveEmployee();
        setPopInMode('show')
        setEmployeeData(initialState);
    }

  return (
    <main>
        <h2>Create Employee : </h2>
        <form>
            <div className='profile'>
                <p>Profile</p>

                <label for='firstName'>First Name</label>
                <input 
                    type='text' 
                    name='firstName'
                    id='firstName'
                    value={employeeData.firstName} 
                    onChange={ e => setEmployeeData({...employeeData, [e.target.name]: e.target.value})}
                />

                <label for='lastName'>Last Name</label>
                <input 
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={employeeData.lastName} 
                    onChange={ e => setEmployeeData({...employeeData, [e.target.name]: e.target.value})}
                />

                <label for='birthDate' >Date of Birth</label>
                <DatePicker 
                    name='birthDate' 
                    id='birthDate' 
                    updateDate={updateState}
                    value = {employeeData.birthDate}
                />
                
                <label for='startDate' >Start Date</label>
                <DatePicker 
                    name='startDate' 
                    id='startDate' 
                    updateDate={updateState}
                    value= {employeeData.startDate}
                />
                
                <label>Department</label>
                <Select 
                    name="department"
                    data={departments}
                    value={employeeData.department}
                    updateSelect={updateState}
                />
            </div>

            <div className='adress'>
                <p>Address</p>

                <label for='street'>Street</label>
                <input 
                    type='text' 
                    name='street'
                    id='street'
                    value={employeeData.street} 
                    onChange={ e => setEmployeeData({...employeeData, [e.target.name]: e.target.value})}
                />

                <label for='city'>City</label>
                <input 
                    type='text' 
                    name='city'
                    id='city'
                    value={employeeData.city} 
                    onChange={ e => setEmployeeData({...employeeData, [e.target.name]: e.target.value})}
                />

                <label>State</label>
                <Select 
                    name="state"
                    data={usaStates}
                    value={employeeData.state}
                    updateSelect={updateState}
                />

                <label for='zipCode'>Zip Code</label>
                <input 
                    type='number' 
                    name='zipCode'
                    id='zipCode'
                    value={employeeData.zipCode} 
                    onChange={ e => setEmployeeData({...employeeData, [e.target.name]: e.target.value})}
                />
            </div>
        </form>
        <button className='submitBtn' onClick={(e) => validate(e)}>Save</button>
        <PopIn mode={popInMode} setMode={updatePopin}/>
    </main>
  )
}

export default Main