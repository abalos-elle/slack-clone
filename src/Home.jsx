import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { channelCreate, channelsGet } from './api/api-channels'
import SearchBar from './components/Users/UserSearchbar/SearchBar'
import Modals from './components/Modals'
import NewChannel from './forms/Channels/NewChannel'
import Logout from './components/Others/Logout/Logout'
import LogoutDropdown from './components/Others/Logout/LogoutDropdown'

import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const Home = ({ userData, userHeaders }) => {
  // Variable definitions
  let navigate = useNavigate()
  let { uid } = useParams()

  // Set states
  const [isNewChannelModalOpen, setNewChannelModalOpen] = useState(false)
  const [isAddMembersModalOpen, setAddMembersModalOpen] = useState(false)
  const [isLogoutDropdownOpen, setLogoutDropdownOpen] = useState(false)
  // Channel details
  const [channels, setChannels] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  // User details
  const [userdata, setUserdata] = useState('')
  const [headers, setHeaders] = useState('')

  // Open modal to add new channel
  const handleOpenNewChannel = () => {
    setNewChannelModalOpen(true)
  }

  // Close modal to add new channel
  const handleCloseNewChannel = () => {
    setNewChannelModalOpen(false)
  }

  // Open modal to add new channel
  const handleOpenAddMembers = () => {
    setAddMembersModalOpen(true)
  }

  // Close modal to add new channel
  const handleCloseAddMembers = () => {
    setAddMembersModalOpen(false)
  }

  // Open logout dropdown
  const handleOpenLogoutDropdown = () => {
    setLogoutDropdownOpen(true);
  }

  // Close logout dropdown
  const handleCloseLogoutDropdown = () => {
    setLogoutDropdownOpen(false);
  }

  // Create new channel
  const newChannel = (e) => {
    e.preventDefault()

    // get userLoggedInDetails
    let userDetails = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

    // set user_ids array for creating new channel to uid of the one creating the channel
    let user_ids = [userDetails.uid]

    // create object
    const newChannelDetails = {
      name,
      user_ids,
    }

    // call API for creating a new channel
    channelCreate(newChannelDetails)
      .then((response) => {
        console.log(response)
        if (response.data.errors != null) {
          console.log(response.config.data)
          return response
        }
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    reset()
  }

  // Event handlers
  const handleNameInput = (e) => {
    setName(e.target.value)
  }

  const handleDescriptionInput = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    newChannel(e)
  }

  const handleClick = (e) => {
    newChannel(e)
  }

  // Reset function
  const reset = () => {
    setNewChannelModalOpen(false)
    setAddMembersModalOpen(false)
    setName('')
    setDescription('')
  }

  // useEffect(() => {
  //   // Set user details after login
  //   setHeaders(userHeaders);
  //   setUserdata(userData);

  //   // Get all channels
  //   channelsGet(headers)
  //   .then(response => {
  //     setChannels(response); 
  //   })
  //   .catch(err => console.log(err));

  // })

  return (
    <main className="main-container">
      <header className="searchbar-container">
        <SearchBar className={'searchUser-container'} />
        <Logout handleOpen={handleOpenLogoutDropdown}/>
        {isLogoutDropdownOpen && <LogoutDropdown handleClose={handleCloseLogoutDropdown} />}
      </header>
      <Sidebar handleOpenNewChannel={handleOpenNewChannel}
      listChannels={channels}
      userdata={userdata}
      headers={headers}
      />
      <Outlet />

      {/* <Channel handleOpen={handleOpenAddMembers}/> */}

      {/* Modal for adding a new channel  */}
      {isNewChannelModalOpen && (
        <Modals
          modalTitle={`Create a channel`}
          modalSubtitle={`Channels are where your team communicates. They're best when organized around a topic -- #marketing, for example.`}
          handleClose={handleCloseNewChannel}
        >
          <NewChannel
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleNameInput={handleNameInput}
            handleDescriptionInput={handleDescriptionInput}
            name={name}
            description={description}
          />
        </Modals>
      )}

      {/* Modal for adding members to a channel */}
      {isAddMembersModalOpen && (
        <Modals modalTitle={`#channelname`} handleClose={handleCloseAddMembers}>
          <SearchBar />
        </Modals>
      )}
    </main>
  )
}

export default Home
