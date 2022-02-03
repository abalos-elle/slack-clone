import React from 'react';
import { FiHash } from "react-icons/fi";

function NewChannel({ handleSubmit, handleNameInput, handleDescriptionInput }) {
  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='label-input-container'>
                <label for='channel-name'>Name</label>
                <div className='input-container'>
                    <span className='input-icon'><FiHash /></span>
                    <input type='text'
                    name='channel-name'
                    id='channel-name'
                    onChange={handleNameInput}
                    placeholder='e.g. plan-budget'
                    required/>
                </div>
            </div>
            <div className='label-input-container'>
                <label for='channel-name-desc'>Description (optional)</label>
                <div className='input-container'>
                    <input type='text'
                    name='channel-name-desc'
                    id='channel-name-desc'
                    onChange={handleDescriptionInput}
                    placeholder='e.g. plan-budget'/>
                </div>
                <div className='input-bottom-desc'>What's this channel about?</div>
            </div>
        </form>
    </div>
  );
}

export default NewChannel;
