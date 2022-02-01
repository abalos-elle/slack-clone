import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from './../../api/api-auth';
import LoginHeader from './LoginComponents/LoginHeader';
import LoginFooter from './LoginComponents/LoginFooter';
import Errors from '../../components/Errors/Errors';

function Login() {
    // Set input & error message states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasError, setHasError] = useState(false)

    // Declare variable for useNavigate
    let navigate = useNavigate();

    // Reset function
    const reset = () => {
        setEmail('');
        setPassword('');
    }

    // Login function
    const loginUser = e => {
        e.preventDefault();

        // Create object with login details
        const userDetails = {email, password}

        // Invoke API for user login
        userLogin(userDetails)
        .then(response => {
            console.log(response);
            if(response.status === 200) {
                setHasError(false);
                reset();
            } else {
                setHasError(true);
            }
        })
        .catch((error) => {
            console.log(error);
            setHasError(true);
        })
        // ❗️ Update with home page path
        navigate('/');
    }
    
    // Event handlers
    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const handlePwInput = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        loginUser(e);
    }

    const handleClickSubmit = e => {
        loginUser(e);
    }

    return (
        <>
            <LoginHeader/>
            <Errors title='Check your login credentials.'>
            Review the information you have submitted and try again.
            </Errors>
            <div>
                <div>
                    <h4>Sign in with Google</h4>
                </div>
                <div>
                    <h4>Sign in with Apple</h4>
                </div>
                <div>
                    <div></div>
                    <div>OR</div>
                    <div></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text'
                        name='reg-email'
                        id='reg-email'
                        value={email}
                        onChange={handleEmailInput}
                        placeholder='name@work-email.com'
                        pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                        required></input>
                    </div>
                    <div>
                        <input type='password'
                        name='setpw'
                        id='setpw'
                        value={password}
                        onChange={handlePwInput}
                        placeholder='Enter your password here.'
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        required></input>
                    </div>
                    <div>
                        <button onClick={handleClickSubmit}>Sign In</button>
                    </div>
                </form>
            </div>
            <LoginFooter/>
        </>
    );
}

export default Login;
