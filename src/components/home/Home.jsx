import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='home-container'>
              <h1 className='home-title'>Welcome!</h1>
              <p className='home-subtitle'>This is a blood donation website. We are here to help you donate  and receive blood.</p>
              <Link to='/employee'><button className='btn btn-primary home-employee-btn'>Continue</button></Link>
        </div>      
    </div>
  )
}

export default Home