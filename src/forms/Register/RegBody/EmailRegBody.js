import React from 'react';
import Errors from '../../../components/Errors/Errors';

function EmailRegBody() {
  return (
      <div>
          <Errors title='Check your email address.'>
              Kindly check the information you have submitted and try again.
          </Errors>
          <form>
              <div>
                  <input type='text'
                  name='reg-email'
                  id='reg-email'
                  placeholder='name@work-email.com'
                  required></input>
              </div>
              <div>
                  <button>Submit</button>
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

export default EmailRegBody;
