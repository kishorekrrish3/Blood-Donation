import React from 'react'
import './donor_blood.css'
import { Link } from 'react-router-dom'

const DonorBlood = () => {
  return (
    <div>
        <div className='blood-container'>
        <h1 className='blood-title'>Donor Blood Details</h1>
        <form className='blood-form'>
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
          <label className='blood-type-label'>Blood and Rh Type</label>
          <div className='blood-type-container'>
          <div class="mb-3 blood-type-select-container">
            <select class="blood-type-select" id="bloodtype" required>
                <option selected>Blood type</option>
                <option value="1">O</option>
                <option value="2">A</option>
                <option value="3">B</option>
                <option value="4">AB</option>
            </select>
            </div>
            <div class="mb-3 blood-type-select-container">
            <select class="blood-type-select" id="rhtype" required>
                <option selected>Rh type</option>
                <option value="1">Positive (+)</option>
                <option value="2">Negative (-)</option>
            </select>
            </div>            
          </div>
          
          <label className='blood-type-label bold'>Eligibility to Donate</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="smoking" required/>
            <label class="form-check-label" for="smoking">
                No Smoking Habits
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="drinking" required />
            <label class="form-check-label" for="drinking">
                No Drinking Habits
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="illness" required />
            <label class="form-check-label" for="illness">
                No Recent Illness
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="tattoo" required />
            <label class="form-check-label" for="tattoo">
                No Recent Tattoos or Piercings
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="pregnancy" required />
            <label class="form-check-label" for="pregnancy">
                No Recent Pregnancy
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="cancer" required />
            <label class="form-check-label" for="cancer">
                No History of Certain Cancers
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="hemoglobin" required />
            <label class="form-check-label" for="hemoglobin">
                No Low Hemoglobin Levels
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="drug" required />
            <label class="form-check-label" for="drug">
                No History of Intravenous Drug Use
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="travel" required />
            <label class="form-check-label" for="travel">
                No Recent Travels to High Risk Areas 
            </label>
          </div>
         
          <div className='donor-blood-buttons'>
            <Link to='main-screen'><button type='submit' className='btn btn-primary'>Submit</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DonorBlood