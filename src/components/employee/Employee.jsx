import React from 'react'
import './employee.css'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <div>
        <div className='employee-container'>
        <h1 className='employee-title'>Employee</h1>
        <div className='employee-buttons'>
              <Link to='/new-employee'><button className='btn btn-primary employee-btn'>New Employee</button></Link>
              <Link to='/existing-employee'><button className='btn btn-primary employee-btn'>Existing Employee</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Employee