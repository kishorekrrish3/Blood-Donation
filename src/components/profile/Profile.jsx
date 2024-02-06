import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

const Profile = () => {
  return (
    <div>
        <div className='profile-container'>
        <h1 className='profile-title'>Choose an option</h1>
        <div className='profile-buttons'>
            <Link to='/new-donor'><button className='btn btn-primary donor-btn'>Donor</button></Link>
            <Link to='/new-recipient'><button className='btn btn-primary recipient-btn'>Recipient</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Profile