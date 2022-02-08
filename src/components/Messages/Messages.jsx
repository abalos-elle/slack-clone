import React, { useState, useEffect } from 'react'
import SendMessage from './SendMessage'
import Message from './Message'
import { getMessages, sendMessage } from '../../api/api-message'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { getUserObject } from '../Users/getUserObject'
import { FiChevronDown } from 'react-icons/fi'
import avatar from '../../avatar-placeholder.png'

const Messages = () => {
  let params = useParams()
  const [messageDetails, setMessageDetails] = useState([])
  const [messageParams, setMessageParams] = useState({})

  useEffect(() => {
    if (params.id) {
      getUserObject(params.id)
        .then((response) => {
          console.log(response)
          setMessageParams({
            receiver_id: response.id,
            receiver_class: 'User',
            uid: response.uid,
          })
        })
        .catch((error) => console.log(error))
    }
  }, [params.id])

  useEffect(() => {
    if (messageParams) {
      handleMessages()
    }
  }, [messageParams])

  const handleMessages = () => {
    getMessages(messageParams)
      .then((res) => {
        const messageData = res.data.data
        if (messageData && messageData.length > 0) {
          setMessageDetails(messageData.reverse())
        } else {
          setMessageDetails([])
        }
      })
      .catch((error) => console.log(error))
  }

  const handleSendMessage = (input) => {
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
        <img src={avatar} />
        <button className="messages-receiver-button">
          {messageParams.uid}
          <FiChevronDown />
        </button>
      </div>
      <div className="messages-scroll-container">
        {messageDetails && messageDetails.length > 0
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
      <SendMessage
        receiverName={messageParams.uid}
        onClick={(input) => {
          handleSendMessage(input)
        }}
      />
    </div>
  )
}

export default Messages
