import React from 'react';

function RegBody({emailValue, pwValue, pwConfirmationValue, onChange, onSubmit, onClick}) {
    return (
        <div>
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
                    <input type='password'
                    name='confirmpw'
                    id='confirmpw'
                    value={pwConfirmationValue}
                    onChange={onChange}
                    placeholder='Confirm your password here.'
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    required></input>
                </div>
                <div>
                    <button onClick={onClick}>Create an Account</button>
                </div>
                <div>
                    <input type='checkbox'
                    name='subscribe'
                    id='subscribe'
                    value='subscribe'></input>
                    <span>It's okay to send me emails about Slack.</span>
                </div>
                <div>
                    By continuing, you're agreeing to our <a href="https://slack.com/terms-of-service">Customer Terms of Service</a>, <a href="https://slack.com/privacy-policy">Privacy Policy</a>, and <a href="https://slack.com/cookie-policy">Cookie Policy</a>.
                </div>
            </form>
        </div>
    );
}

export default RegBody;
