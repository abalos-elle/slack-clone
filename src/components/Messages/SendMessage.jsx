import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'

const receiverName = 'Jianne'

const SendMessage = ({ onClick }) => {
  const [input, setInput] = useState('')

  return (
    <div className="send-message-container">
      <div className="send-message-input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={`Message ${receiverName}`}
          ></input>
          <div className="send-message-buttons-container">
            <button
              className={`send-message-button${input === '' ? '' : '-active'}`}
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                onClick(input)
                setInput('')
              }}
            >
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendMessage
