import React from 'react'
import './donor.css'
import { Link } from 'react-router-dom'

const Donor = () => {
  return (
    <div>
      <div className='donor-container'>
              <h1 className='donor-title'>Donor</h1>
              <Link to='/new-donor'><button className='btn btn-primary donor-btn-new-donor'>New Donor</button></Link>
              <Link to='/existing-donor'><button className='btn btn-primary donor-btn-existing-donor'>Existing Donor</button></Link>
      </div>
    </div>
  )
}

export default Donor