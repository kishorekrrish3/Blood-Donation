import React from 'react'
import './recipient.css'
import { Link } from 'react-router-dom'

const Recipient = () => {
  return (
    <div>
      <div className='recipient-container'>
              <h1 className='recipient-title'>Recipient</h1>
              <Link to='/new-recipient'><button className='btn btn-primary recipient-btn-new-recipient'>New Recipient</button></Link>
              <Link to='/existing-recipient'><button className='btn btn-primary recipient-btn-existing-recipient'>Existing Recipient</button></Link>
      </div>
    </div>
  )
}

export default Recipient