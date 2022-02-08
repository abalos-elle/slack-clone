import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SendMessage from './SendMessage'
import { sendMessage } from '../../api/api-message'
import SearchBar from '../Users/UserSearchbar/SearchBar'
import { getUserObject } from '../Users/getUserObject'

const CreateNewMessage = () => {
  let navigate = useNavigate()
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

  const handleSendMessage = (input) => {
    sendMessage({
      receiver_id: messageParams.receiver_id,
      receiver_class: messageParams.receiver_class,
      body: input,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => {
        navigate(`../${params.uid}/messages/${params.id}`)
      })
  }

  return (
    <div className="messages-container">
      <div className="messages-container-header">
        <p>New message</p>
      </div>
      <div className="messages-search-user">
        <p>To:</p>
        {/* change selection behavior later */}
        <SearchBar className="messages-searchbar" searchNavLink={''} />
      </div>
      <div className="empty-message-container"></div>
      <SendMessage
        receiverName={messageParams.uid}
        onClick={(input) => {
          handleSendMessage(input)
        }}
      />
    </div>
  )
}

export default CreateNewMessage
