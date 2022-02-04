import React, { useState, useEffect } from 'react'
import SendMessage from './SendMessage'
import Message from './Message'
import { getMessages, sendMessage } from '../../api/api-message'
import moment from 'moment'

const messageParams = {
  receiver_id: 1634,
  receiver_class: 'User',
  uid: 'jianne1@example.com',
}

const Messages = () => {
  const [messageDetails, setMessageDetails] = useState('')
  useEffect(() => {
    handleMessages()
  }, [])

  const handleMessages = () => {
    getMessages(messageParams)
      .then((res) => {
        console.log('getting messages')
        setMessageDetails(res.data.data.reverse())
      })
      .catch((error) => console.log(error))
  }

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
        handleMessages()
      })
  }

  return (
    <div className="messages-container">
      <div className="messages-container-header">
        <button className="messages-receiver-button">
          {messageParams.uid}
        </button>
      </div>
      <div className="messages-scroll-container">
        {messageDetails !== ''
          ? messageDetails.map((message, index) => {
              return (
                <Message
                  key={index}
                  sender={message.sender.email}
                  body={message.body}
                  time={moment(message.created_at).calendar()}
                />
              )
            })
          : null}
      </div>

      <SendMessage onClick={handleSendMessage} />
    </div>
  )
}

export default Messages
