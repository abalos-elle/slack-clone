import React, { useEffect } from 'react'
import {
  FiEdit,
  FiChevronDown,
  FiAtSign,
  FiMoreVertical,
  FiPlus,
} from 'react-icons/fi'
import { IoChatbubblesOutline, IoChevronDownOutline } from 'react-icons/io5'
import { BsChatText } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ChannelList from '../Channel/ChannelList';
import RecentDms from '../Users/RecentDms'

const Sidebar = ({ handleOpenNewChannel, channels, userdata, headers, handleToggleRender }) => {
  let navigate = useNavigate()
  let { uid } = useParams()
  let user_ids = []

  // Create a function to display list of channels
  const displayChannels = channels ?
  channels.map((channel, index) => {
    return (
      <ChannelList index={index}
      name={channel.name}/>
    )
  })
  : null

  useEffect(() => {}, [handleToggleRender]);

  return (
    <nav className="sidebar-container">
      <div className="sidebar-header">
        <button
          className="team-name-button"
        >
          Avion School <FiChevronDown />
        </button>

        <Link to={`${uid}/new-message`}>
          <div className="compose-button">
            <FiEdit />
          </div>
        </Link>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-options">
          <BsChatText />
          <span>Threads</span>
        </li>
        <li className="menu-options">
          <IoChatbubblesOutline />
          <span>All DMs</span>
        </li>
        <li className="menu-options">
          <FiAtSign />
          <span>Mentions & reactions</span>
        </li>
        <li className="menu-options">
          <FiMoreVertical />
          <span>More</span>
        </li>
        <li className="channels-dropdown">
          <div className="channels-dropdown-header">
            <IoChevronDownOutline />
            <span>Channels</span>
            <div className="sidebar-add-icon">
              <FiPlus onClick={handleOpenNewChannel} />
            </div>
          </div>
          {/* TODO: insert list of user channels here */}
          <ul className="channels">
            {displayChannels}
          </ul>
        </li>
        <li className="direct-messages-dropdown">
          <div className="direct-messages-dropdown-header">
            <IoChevronDownOutline />
            <span>Direct Messages</span>
            <div className="sidebar-add-icon">
              <FiPlus />
            </div>
          </div>
          <RecentDms loginData={headers} />
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;