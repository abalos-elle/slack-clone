import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { channelCreate } from './api/api-channels'
import SearchBar from './components/Users/UserSearchbar/SearchBar'
import Modals from './components/Modals'
import NewChannel from './forms/Channels/NewChannel'

import { Outlet, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const Home = () => {
  // Variable definitions
  let navigate = useNavigate()
  let { uid } = useParams()
  let user_ids = []

  // Set states
  const [isNewChannelModalOpen, setNewChannelModalOpen] = useState(false)
  const [isAddMembersModalOpen, setAddMembersModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // Create function to open modals on click

  // Create function to close modals on click
  const handleCloseNewChannel = () => {
    setNewChannelModalOpen(false)
  }

  const handleOpenNewChannel = () => {
    setNewChannelModalOpen(true)
  }

  const handleOpenAddMembers = () => {
    setAddMembersModalOpen(true)
  }

  const handleCloseAddMembers = () => {
    setAddMembersModalOpen(false)
  }

  // Create new channel
  const newChannel = (e) => {
    e.preventDefault()

    // get userLoggedInDetails
    let userDetails = JSON.parse(sessionStorage.getItem('userLoggedInDetails'))

    // set user_ids array for creating new channel to uid of the one creating the channel
    user_ids = [userDetails.uid]

    // create object
    const newChannelDetails = {
      name,
      user_ids,
    }

    // call API
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

  // TODO: convert to individual components once available
  return (
    <main className="main-container">
      <header className="searchbar-container">
        <p>Test: This is the home page for {uid}. </p>
        <SearchBar />
      </header>
      <Sidebar />
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
