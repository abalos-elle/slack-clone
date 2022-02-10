import React from 'react';
import { useState } from 'react'

export function FindMembers ({ list }) {
    const [searchInput, setSearchInput] = useState('')
    return (
      // added classname props to change css when reused
        <div className='findmembers-search'>
            <input
            value={searchInput}
            type="text"
            placeholder='Find members'
            onChange={(event) => {
                setSearchInput(event.target.value)
            }}
            />
      {/* added a div wrapper */}
      {searchInput && searchInput.length > 0 ? (
        <div className="userlist">
          {list
            .filter((user) => {
              if (searchInput == '') {
                return ''
              } else return user
            })}
        </div>)
        : null}
    </div>
  );
}
