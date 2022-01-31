import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegistration } from './../../api/api-auth';
import LoginHeader from './LoginComponents/LoginHeader';
import LoginBody from './LoginComponents/LoginBody';
import LoginFooter from './LoginComponents/LoginFooter';
import Errors from '../../components/Errors/Errors';

function Login() {
    // Set input & error message states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasError, setHasError] = useState(false)

    // Reset function
    const reset = () => {
        setEmail('');
        setPassword('');
    }

    // Login function
    const loginUser = e => {
        e.preventDefault();
    }
    
    // Event handlers
    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        loginUser();
    }

    const handleClickSubmit = e => {
        loginUser();
    }

    return (
        <>
            <LoginHeader/>
            <Errors title='Check your login credentials.'>
            Review the information you have submitted and try again.
            </Errors>
            <LoginBody value={email}
            onChange={handleEmailInput}
            onSubmit={e => handleSubmit}
            onClick={e => handleClickSubmit}/>
            <LoginFooter/>
        </>
    );
}

export default Login;
