import React,{useState} from 'react'
import './existing_employee.css'
import { account } from '../../../../appwrite/appwrite'
import { useNavigate } from 'react-router-dom'

const ExistingEmployee = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const loginUser = async (e) => { 
    e.preventDefault()
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/profile");
    } catch (error) { 
      console.log(error)
      navigate("/new-employee")
    }
  }

  return (
    <div>
      <div className='existing-employee-container'>
        <h1 className='existing-employee-title'>Employee Login</h1>
        <form className='existing-employee-form' method='POST'>
          
          <div className='mb-3'>
            <label for='existing-emp-email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='existing-emp-email'
              onChange={
                (e) => {
                  setUser({
                    ...user,
                    email: e.target.value
                })
              }
            }
              required />
          </div>

          <div className='mb-3'>
            <label for='existing-emp-password' className='form-label'>Password</label>
            <input type='password' className='form-control' id='existing-emp-password'
            onChange={
                (e) => {
                  setUser({
                    ...user,
                    password: e.target.value
                })
              }
            }
              required />
          </div>
          <div className='existing-employee-buttons'>
            <button type='submit' className='btn btn-primary' onClick={loginUser}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExistingEmployee