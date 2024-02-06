import React from 'react'
import './recipient_blood.css'
import { Link } from 'react-router-dom'

const RecipientBlood = () => {
  return (
    <div>
        <div className='recipient-blood-container'>
        <h1 className='recipient-blood-title'>Recipient Blood Details</h1>
        <form className='recipient-blood-form'>
          {/* <div className='blood-type-container'>
            <div className='mb-3'>
                <label for='blood-type' className='form-label blood-type-label'>Blood Type</label>
                <input type='text' className='form-control blood-type-input' id='blood-type' required />
            </div>
            <div className='mb-3'>
                <label for='blood-rh' className='form-label blood-type-label'>Rh Type</label>
                <input type='text' className='form-control blood-type-input' id='blood-rh' required />
            </div>
          </div> */}
          <label className='recipient-blood-type-label'>Blood and Rh Type</label>
          <div className='recipient-blood-type-container'>
          <div class="mb-3 recipient-blood-type-select-container">
            <select class="recipient-blood-type-select" id="recipient-bloodtype" required>
                <option selected>Blood type</option>
                <option value="1">O</option>
                <option value="2">A</option>
                <option value="3">B</option>
                <option value="4">AB</option>
            </select>
            </div>
            <div class="mb-3 recipient-blood-type-select-container">
            <select class="recipient-blood-type-select" id="rhtype" required>
                <option selected>Rh type</option>
                <option value="1">Positive (+)</option>
                <option value="2">Negative (-)</option>
            </select>
            </div>            
          </div>       

          <Link to='/main-screen'><button type='submit' className='btn btn-primary'>Submit</button></Link>
        </form>
      </div>
    </div>
  )
}

export default RecipientBlood