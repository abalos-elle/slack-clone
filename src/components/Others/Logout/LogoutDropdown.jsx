import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutDropdown({handleClose}) {
    let navigate = useNavigate();
    const signout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    return (
    <div className='modal-backdrop' onClick={handleClose}>
        <div className='logout-avatar-dropdown'>
            <ul>
                <li>Profile</li>
                <li>Preferences</li>
                <hr></hr>
                <li onClick={signout}>Sign out of Group 3</li>
            </ul>
        </div>
    </div>
  );
}

export default LogoutDropdown;
