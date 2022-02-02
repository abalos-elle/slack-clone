import React, { useState, useEffect } from 'react'
import SendMessage from './SendMessage'
import Message from './Message'
import { getMessages, sendMessage } from './MessageAPI'
import moment from 'moment'

const sampleHeaders = {
  token: 'rA8thW3o2vILeinpuBWWvw',
  client: '5VA_7vvpaIxl4vuXZqsjJA',
  expiry: '1644923225',
  uid: 'jianne1@example.com',
}

const messageParams = {
  receiver_id: 1635,
  receiver_class: 'User',
  headers: sampleHeaders,
  uid: 'jianne2@example.com',
}

const Messages = () => {
  const [messageDetails, setMessageDetails] = useState('')
  useEffect(() => {
    handleMessages()
  }, [])

  const handleMessages = () => {
    getMessages(messageParams)
      .then((res) => {
        setMessageDetails(res.data.data)
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
      <div className="recipient-container">
        <button>{messageParams.uid}</button>
      </div>
      {messageDetails !== ''
        ? messageDetails.map((message) => {
            return (
              <Message
                key={message.id}
                sender={message.sender.email}
                body={message.body}
                time={moment(message.created_at).format('LT')}
              />
            )
          })
        : null}
      <SendMessage onClick={handleSendMessage} />
    </div>
  )
}

export default Messages
