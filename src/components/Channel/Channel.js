import React from 'react'
import ChannelHeader from './ChannelHeader'
import Chats from './Chats'
import ChannelTextInput from './ChannelTextInput'
import Messages from '../Messages/Messages'
import { useParams } from 'react-router-dom'

function Channel({ handleOpen }) {
  let params = useParams()

  return (
    <div className={null}>
      <Messages
        displayHeader={<ChannelHeader handleOpen={handleOpen} />}
        receiverClass="Channel"
        receiverID={params.channelName}
      />
    </div>
  )
}

export default Channel
