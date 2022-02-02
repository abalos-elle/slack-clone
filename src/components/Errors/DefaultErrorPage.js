import React from 'react';
import { TiWarningOutline } from "react-icons/ti";

function DefaultErrorPage() {
  return (
      <div className='Error-page-container'>
          <header className='error-page-header-container'>

          </header>
          <main className='error-page-main-container'>
              <div className='error-container'>
                  <div className='error-title'>
                    <span className='warning-red'><TiWarningOutline/></span>
                    <span>There's been a glitch...</span>
                  </div>
                  <br/>
                  <div className='error-message'>
                    <p>We're not quite sure what went wrong. You can go back, or try looking on our <a href='http://get.slack.help/hc/en-us'>Help Center</a> if you need a hand.</p>
                  </div>
              </div>
          </main>
          <footer className='error-page-footer-container'>

          </footer>
      </div>
  );
}

export default DefaultErrorPage;