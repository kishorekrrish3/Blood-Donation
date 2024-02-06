import React from 'react'
import './new_donor.css'
import { Link } from 'react-router-dom'


const NewDonor = () => {  
  return (
    <div>
      <div className='new-donor-container'>
        <h1 className='new-donor-title'>New Donor Registration</h1>
        <form className='new-donor-form'>
          
          <div className='mb-3'>
            <label for='new-donor-fname' className='form-label'>First Name</label>
            <input type='text' className='form-control' id='new-donor-fname' required />
          </div>
          
          <div className='mb-3'>
            <label for='new-donor-lname' className='form-label'>Last Name</label>
            <input type='text' className='form-control' id='new-donor-lname' required />
          </div>
          
          <div className='mb-3'>
            <label for='new-donor-email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='new-donor-email' required />
          </div>
          
          <div className='mb-3'>
            <label for='new-donor-phone' className='form-label'>Phone</label>
            <input type='text' className='form-control' id='new-donor-phone' required />
          </div>
          
          <div className='mb-3'>
            <label for='new-donor-dob' className='form-label'>DOB</label>
            <input type='date' className='form-control' id='new-donor-dob' required />
          </div>

          <Link to='/donor-blood'><button type='submit' className='btn btn-primary'>Continue</button></Link>
        </form>
      </div>
    </div>
  )
}

export default NewDonor