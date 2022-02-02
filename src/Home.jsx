import React from 'react'
import { useState } from 'react'
import {
  FiEdit,
  FiChevronDown,
  FiAtSign,
  FiMoreVertical,
  FiLock,
  FiPlus
} from 'react-icons/fi'
import { BsChatText } from 'react-icons/bs'
import { IoChatbubblesOutline, IoChevronDownOutline } from 'react-icons/io5'
import avatar from './avatar-placeholder.png'
import Messages from './components/Messages'
import { useParams } from 'react-router-dom'
import Channel from './components/Channel/Channel'
import Modals from './components/Modals'
import NewChannel from './forms/Channels/NewChannel'

const Home = () => {
  let {uid} = useParams();

  // Set states
  const [isModalOpen, setModalOpen] = useState(false)

  // Create function to open modals on click
  const handleOpen = () => {
    setModalOpen(true);
  }
  // Create function to close modals on click
  const handleClose = () => {
    setModalOpen(false);
  }


  // TODO: convert to individual components once available
  return (
    <main className="main-container">
      <header className="searchbar-container">search bar here</header>
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
              <div className='sidebar-add-icon'>
                <FiPlus onClick={handleOpen} />
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
              <div className='sidebar-add-icon'>
                <FiPlus />
              </div>
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
      {/* <Messages /> */}
      <Channel/>
      {isModalOpen && <Modals modalTitle={`Create a channel`}
      modalSubtitle={`Channels are where your team communicates. They're best when organized around a topic -- #marketing, for example.`}
      btnText='Create'
      btnTitle='create-channel'
      btnClass='btn-rectangle-large'
      handleClose={handleClose}>
        <NewChannel />
      </Modals>}
    </main>
  )
}

export default Home
