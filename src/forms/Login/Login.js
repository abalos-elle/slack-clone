import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userLogin } from './../../api/api-auth'
import LoginHeader from './LoginComponents/LoginHeader'
import LoginFooter from './LoginComponents/LoginFooter'
import Errors from '../../components/Errors/Errors'
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

function Login({ authenticate }) {
  // Set input & error message states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  // Declare variable for useNavigate & useParams
  let navigate = useNavigate()
  let { uid } = useParams()

  // Reset function
  const reset = () => {
    setEmail('')
    setPassword('')
  }

  // Login function
  const loginUser = (e) => {
    e.preventDefault()

    // Create object with login details
    const userDetails = { email, password }

    // Invoke API for user login
    userLogin(userDetails)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          sessionStorage.setItem(
            'userLoggedInDetails',
            JSON.stringify(response.headers)
          )
          uid = response.data.data.id
          console.log(uid)
          setHasError(false)
          reset()
          authenticate()
          navigate(`/${uid}`)
        } else {
          setHasError(true)
        }
      })
      .catch((error) => {
        console.log(error)
        setHasError(true)
      })
  }

  // Event handlers
  const handleEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const handlePwInput = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    loginUser(e)
  }

  const handleClickSubmit = (e) => {
    loginUser(e)
  }

  return (
    <div className='auth'>
      <LoginHeader />
      {hasError && <Errors title="Check your login credentials.">
        Review the information you have submitted and try again.
      </Errors>}
      <div className='login-btns-container'>
        <div className='login-google'>
          <div className='login-icon'><FcGoogle /></div>
          <div>Sign in with Google</div>
        </div>
        <div className='login-apple'>
          <div className='login-icon'><AiFillApple /></div>
          <div>Sign in with Apple</div>
        </div>
        <div className='login-divider'>
          <hr className='login-divider-line'/>
          <div className='login-divider-or'>OR</div>
          <hr className='login-divider-line'/>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className='input-auth'
              type="text"
              name="reg-email"
              id="reg-email"
              value={email}
              onChange={handleEmailInput}
              placeholder="name@work-email.com"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              required
            ></input>
          </div>
          <div>
            <input
              className='input-auth'
              type="password"
              name="setpw"
              id="setpw"
              value={password}
              onChange={handlePwInput}
              placeholder="Enter your password here."
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              required
            ></input>
          </div>
          <div>
            <button className='auth-button'
            onClick={handleClickSubmit}>
              Sign In
              </button>
          </div>
        </form>
      </div>
      <LoginFooter />
    </div>
  )
}

export default Login
