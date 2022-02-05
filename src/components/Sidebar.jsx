import React from 'react'
import {
  FiEdit,
  FiChevronDown,
  FiAtSign,
  FiMoreVertical,
  FiLock,
  FiPlus,
} from 'react-icons/fi'
import { IoChatbubblesOutline, IoChevronDownOutline } from 'react-icons/io5'
import { BsChatText } from 'react-icons/bs'
import avatar from '../avatar-placeholder.png'
import Messages from './Messages/Messages'
import RecentDms from './Users/RecentDms'
import Channel from './Channel/Channel'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Sidebar = () => {
  let navigate = useNavigate()
  let { uid } = useParams()
  let user_ids = []

  const handleOpenNewChannel = () => {
    // setNewChannelModalOpen(true)
  }

  return (
    <nav className="sidebar-container">
      <div className="sidebar-header">
        <button
          className="team-name-button"
          onClick={() => {
            sessionStorage.clear()
            navigate('/login')
          }}
        >
          FakeLogout <FiChevronDown />
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
          <ul className="channels">
            <li>
              <FiLock size={'0.8em'} />
              <span>batch15</span>
            </li>
            <li>
              <FiLock size={'0.8em'} />
              <span>batch16</span>
            </li>
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
          <Link to={`${uid}/messages`}>
            <RecentDms />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
