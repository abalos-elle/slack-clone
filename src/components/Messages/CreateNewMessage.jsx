import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SendMessage from './SendMessage'
import { sendMessage } from '../../api/api-message'
import SearchBar from '../Users/UserSearchbar/SearchBar'

const messageParams = {
  receiver_id: 1634,
  receiver_class: 'User',
  uid: 'jianne1@example.com',
}

const CreateNewMessage = () => {
  const [messageDetails, setMessageDetails] = useState({})

  const handleSendMessage = (input) => {
    console.log('send', input)
    sendMessage({
      receiver_id: messageParams.receiver_id,
      receiver_class: messageParams.receiver_class,
      body: input,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => {
        // add use navigate to recipient page
        // useNavigate()
      })
  }

  return (
    <div className="new-messages-container">
      <div className="messages-container-header">
        <p>New message</p>
      </div>
      <div className="messages-search-user">
        <p>To:</p>
        {/* change selection behavior later */}
        <SearchBar className="messages-searchbar" onSelect={() => {}} />
      </div>
      <SendMessage
        onClick={() => {
          handleSendMessage()
        }}
      />
    </div>
  )
}

export default CreateNewMessage
