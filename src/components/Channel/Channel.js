import React from 'react';
import ChannelHeader from './ChannelHeader';
import Chats from './Chats';
import ChannelTextInput from './ChannelTextInput';

function Channel({handleOpen}) {
  return (
      <div className={`Channel-container`}>
        <ChannelHeader handleOpen={handleOpen} />
      </div>
  );
}

export default Channel;
