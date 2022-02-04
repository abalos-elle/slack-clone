import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { channelCreate } from './api/api-channels'
import Messages from './components/Messages'
import RecentDms from './components/Users/RecentDms'
import SearchBar from './components/Users/UserSearchbar/SearchBar'
import Channel from './components/Channel/Channel'
import Modals from './components/Modals'
import NewChannel from './forms/Channels/NewChannel'
import { FiEdit, FiChevronDown, FiAtSign, FiMoreVertical, FiLock, FiPlus } from 'react-icons/fi'
import { IoChatbubblesOutline, IoChevronDownOutline } from 'react-icons/io5'
import { BsChatText } from 'react-icons/bs'
import avatar from './avatar-placeholder.png'

const Home = () => {
  // Variable definitions
  let navigate = useNavigate();
  let {uid} = useParams();
  let user_ids = [];

  // Set states
  const [isNewChannelModalOpen, setNewChannelModalOpen] = useState(false)
  const [isAddMembersModalOpen, setAddMembersModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // Create function to open modals on click
  const handleOpenNewChannel = () => {
    setNewChannelModalOpen(true);
  }

  const handleOpenAddMembers = () => {
    setAddMembersModalOpen(true);
  }

  // Create function to close modals on click
  const handleCloseNewChannel = () => {
    setNewChannelModalOpen(false);
  }

  const handleCloseAddMembers = () => {
    setAddMembersModalOpen(false);
  }

  // Create new channel
  const newChannel = e => {
    e.preventDefault();
    
    // get userLoggedInDetails
    let userDetails = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))
    
    // set user_ids array for creating new channel to uid of the one creating the channel
    user_ids = [userDetails.uid];

    // create object
    const newChannelDetails = {
      name,
      user_ids
    }

    // call API
    channelCreate(newChannelDetails)
    .then(response => {
      console.log(response);
      if (response.data.errors != null) {
        console.log(response.config.data);
        return response;
      }
    })
    .catch(error => {
      console.log(error);
      return error;
    })
    reset();
  }
  
  // Event handlers
  const handleNameInput = e => {
    setName(e.target.value);
  }

  const handleDescriptionInput = e => {
    setDescription(e.target.value);
  }
  
  const handleSubmit = e => {
    newChannel(e);
  }

  const handleClick = e => {
    newChannel(e);
  }

  // Reset function
  const reset = () => {
    setNewChannelModalOpen(false);
    setAddMembersModalOpen(false);
    setName('');
    setDescription('');
  }


  // TODO: convert to individual components once available
  return (
    <main className="main-container">
      <header className="searchbar-container">
        <SearchBar />
      </header>
      {/* <header className="searchbar-container">search bar here</header> */}
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
              <div className='sidebar-add-icon'>
                <FiPlus />
              </div>
            </div>
            <RecentDms />
            
          </li>
        </ul>
      </nav>
      {/* <Messages /> */}
      <Channel handleOpen={handleOpenAddMembers}/>
      
      {/* Modal for adding a new channel  */}
      {isNewChannelModalOpen && <Modals modalTitle={`Create a channel`}
      modalSubtitle={`Channels are where your team communicates. They're best when organized around a topic -- #marketing, for example.`}
      handleClose={handleCloseNewChannel}>
        <NewChannel handleSubmit={handleSubmit}
        handleClick={handleClick}
        handleNameInput={handleNameInput}
        handleDescriptionInput={handleDescriptionInput}
        name={name}
        description={description}/>
      </Modals>}

      {/* Modal for adding members to a channel */}
      {isAddMembersModalOpen && <Modals modalTitle={`#channelname`}
      handleClose={handleCloseAddMembers}>
        <SearchBar />
      </Modals>}
    </main>
  )
}

export default Home
