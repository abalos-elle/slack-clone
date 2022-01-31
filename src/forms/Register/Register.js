import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegistration } from './../../api/api-auth';
import RegHeader from './RegComponents/RegHeader';
import RegBody from './RegComponents/RegBody';
import RegFooter from './RegComponents/RegFooter';
import Errors from '../../components/Errors/Errors';

function Register() {
  // Set input & error message states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPwConfirmation] = useState('')
  const [hasError, setHasError] = useState(false)

  // Reset function
  const reset = () => {
    setEmail('');
    setPassword('');
    setPwConfirmation('');
  }

  // Create user account upon registration
  const createUser = e => {
    e.preventDefault();
    setEmail(e.target.value);
    const userDetails = {email, password, passwordConfirmation}
    userRegistration(userDetails)
    .then(response => {
      console.log(response);
      if(response.data.status === 'success') {
        setHasError(false);
        reset();
      } else {
        console.log(response.data.status);
        setHasError(true);
      }
    })
    .catch(error => setHasError(true))
  }

  // Event handlers
  const handleEmailInput = e => {
    setEmail(e.target.value);
  }

  const handleSubmit = e => {
    createUser();
  }

  const handleClickSubmit = e => {
    createUser();
  }

  return (
      <>
        <RegHeader/>
        <Errors title='Check your email address.'>
          Review the information you have submitted and try again.
        </Errors>
        <RegBody value={email}
        onChange={handleEmailInput}
        onSubmit={e => handleSubmit}
        onClick={e => handleClickSubmit}/>
        <RegFooter/>
      </>
  );
}

export default Register;
