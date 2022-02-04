import React from 'react';
import Buttons from './../Buttons';
import { FiLock, FiChevronDown } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

function ChannelHeader() {
    let {channelName} = useParams();

    return (
        <div className='Channel-header-container'>
            <div className='btn-container'>
                <Buttons className={`btn-channel-title btn-rectangle-medium`} title='btn-channel-title'>
                    <span><FiLock/></span>
                    <span>{channelName}</span>
                    <span><FiChevronDown/></span>
                </Buttons>
            </div>
            <div className='btn-container'>
                <Buttons className={`btn-channel-addUsers btn-rectangle-medium`} title='btn-channel-addUsers'>
                    <span>Add Members</span>
                </Buttons>
            </div>
        </div>
    );
}

export default ChannelHeader;
