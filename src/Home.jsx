import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Messages from './components/Messages/Messages'
import RecentDms from './components/Users/RecentDms'
import SearchBar from './components/Users/UserSearchbar/SearchBar'
import Channel from './components/Channel/Channel'
import Modals from './components/Modals'
import NewChannel from './forms/Channels/NewChannel'
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
import avatar from './avatar-placeholder.png'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  let { uid } = useParams()
  let navigate = useNavigate()

  // Set states
  const [isModalOpen, setModalOpen] = useState(false)

  // Create function to open modals on click
  const handleOpen = () => {
    setModalOpen(true)
  }
  // Create function to close modals on click
  const handleClose = () => {
    setModalOpen(false)
  }

  // TODO: convert to individual components once available
  return (
    <main className="main-container">
      <header className="searchbar-container">
        <p>Test: This is the home page for {uid}. </p>
        <SearchBar />
      </header>
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
      <Outlet />
      <Channel />
      {isModalOpen && (
        <Modals
          modalTitle={`Create a channel`}
          modalSubtitle={`Channels are where your team communicates. They're best when organized around a topic -- #marketing, for example.`}
          btnText="Create"
          btnTitle="create-channel"
          btnClass="btn-rectangle-large"
          handleClose={handleClose}
        >
          <NewChannel />
        </Modals>
      )}
    </main>
  )
}

export default Home
