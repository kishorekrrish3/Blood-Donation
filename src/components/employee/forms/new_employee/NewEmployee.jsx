import React, {useState} from 'react'
import './new_employee.css'
import { account } from '../../../../appwrite/appwrite'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
import { AppwriteException } from 'appwrite'

const NewEmployee = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  })

  //Signup
  const signupUser = async (e) => {
    e.preventDefault()
    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name,
      user.phone
    );

    promise.then(
      function(response){
        console.log(response)
        navigate("/existing-employee") //success
      },
      function(error) {
        console.log(error)
        if (AppwriteException.type = 'user_already_exists') {
          alert('User already exists');
          navigate('/existing-employee')//error
        }
      }
    )
  }

  

  return (
    <div>
      <div className='new-employee-container'>
        <h1 className='new-employee-title'>New Employee Registration</h1>
        <form className='new-employee-form' action='#' method='POST'>
          
          <div className='mb-3'>
            <label for='new-emp-name' className='form-label'>Employee Name</label>
            <input type='text' className='form-control' id='new-emp-name'
              onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value
              })
            }} required />
          </div>

          <div className='mb-3'>
            <label for='new-emp-email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='new-emp-email'
              onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value
              })
            }}
              required />
          </div>

          <div className='mb-3'>
            <label for='new-emp-phone' className='form-label'>Phone</label>
            <input type='text' className='form-control' id='new-emp-phone'
              onChange={(e) => {
              setUser({
                ...user,
                phone: e.target.value
              })
            }}
              required />
          </div>

          <div className='mb-3'>
            <label for='new-emp-password' className='form-label'>Password</label>
            <input type='password' className='form-control' id='new-emp-password'
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value
              })
            }}
              required />
          </div>

          <div className='new-employee-buttons'><button type='submit' className='btn btn-primary new-employee-btn' onClick={signupUser}>Register</button></div>
        </form>
      </div>
    </div>
  )
}

export default NewEmployee