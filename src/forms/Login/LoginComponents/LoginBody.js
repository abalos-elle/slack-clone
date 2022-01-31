import React from 'react';

function LoginBody({emailValue, pwValue, onChange, onSubmit, onClick}) {
    return (
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
            <form onSubmit={onSubmit}>
                <div>
                    <input type='text'
                    name='reg-email'
                    id='reg-email'
                    value={emailValue}
                    onChange={onChange}
                    placeholder='name@work-email.com'
                    pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                    required></input>
                </div>
                <div>
                    <input type='password'
                    name='setpw'
                    id='setpw'
                    value={pwValue}
                    onChange={onChange}
                    placeholder='Enter your password here.'
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    required></input>
                </div>
                <div>
                    <button onClick={onClick}>Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default LoginBody;
