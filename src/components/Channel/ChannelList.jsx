import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { FiLock } from 'react-icons/fi'

function ChannelList({ index, name }) {
    let { uid, channelName } = useParams();

    return (
        <Link to={`${uid}/channels/${channelName}`}>
            <li key={index}
            title={name}>
                <FiLock />
                <span>{name}</span>
            </li>
        </Link>
    );
}

export default ChannelList;
