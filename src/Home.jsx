import React from 'react'
import {
  FiEdit,
  FiChevronDown,
  FiAtSign,
  FiMoreVertical,
  FiLock,
} from 'react-icons/fi'
import { BsChatText } from 'react-icons/bs'
import { IoChatbubblesOutline, IoChevronDownOutline } from 'react-icons/io5'
import avatar from './avatar-placeholder.png'
import Messages from './components/Messages'
import { useParams } from 'react-router-dom'

const Home = () => {
  let {uid} = useParams();
  // TODO: convert to individual components once available
  return (
    <main className="main-container">
      <header className="searchbar-container">search bar here; <p>Test: This is the home page for {uid}. </p></header>
      <nav className="sidebar-container">
        <div className="sidebar-header">
          <button className="team-name-button">
            Avion School <FiChevronDown />
          </button>
          <div className="compose-button">
            <FiEdit />
          </div>
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
            </div>
            <ul className="direct-messages">
              <li>
                <img src={avatar} alt="avatar" />
                <div className="online-status-on"></div>
                <span>jianne</span>
              </li>
              <li>
                <img src={avatar} alt="avatar" />
                <div className="online-status-off"></div>
                <span>elle</span>
              </li>
              <li className="nav-select">
                <img src={avatar} alt="avatar" />
                <div className="online-status-off"></div>
                <span>bill</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Messages />
    </main>
  )
}

export default Home
