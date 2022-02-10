import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'

const SendMessage = ({ onClick, receiverName = '' }) => {
  const [input, setInput] = useState('')

  return (
    <div className={'send-message-container'}>
      <div>
        <form className="send-message-input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message ${receiverName}`}
          ></textarea>
          {/* <div className="send-message-buttons-container"> */}
          <button
            className={`send-message-button${input === '' ? '' : '-active'}`}
            type="button"
            onClick={() => {
              onClick(input)
              setInput('')
            }}
          >
            <IoSend />
          </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  )
}

export default SendMessage
