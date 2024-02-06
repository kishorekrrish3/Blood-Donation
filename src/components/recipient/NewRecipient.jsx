import React from 'react'
import './new_recipient.css'
import { Link } from 'react-router-dom'

const NewRecipient = () => {
  return (
    <div>
      <div className='new-recipient-container'>
        <h1 className='new-recipient-title'>New Recipient Registration</h1>
        <form className='new-recipient-form'>
          <div className='mb-3'>
            <label for='new-recipient-name' className='form-label'>Recipient Name</label>
            <input type='text' className='form-control' id='new-recipient-name' required />
          </div>
          <div className='mb-3'>
            <label for='new-recipient-email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='new-recipient-email' required />
          </div>
          <div className='mb-3'>
            <label for='new-recipient-phone' className='form-label'>Phone</label>
            <input type='text' className='form-control' id='new-recipient-phone' required />
          </div>
          <div className='mb-3'>
            <label for='new-recipient-password' className='form-label'>Password</label>
            <input type='password' className='form-control' id='new-recipient-password' required />
          </div>

          <div className='new-recipient-buttons'>
            <Link to='/recipient-blood'><button type='submit' className='btn btn-primary'>Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewRecipient