import React from 'react';
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import avatar from '../../avatar-placeholder.png'

export function FindMembers ({ list, addMember, disable }) {
  const [searchInput, setSearchInput] = useState()  

  return (
        <div className='findmembers-search'>
          <div className='findmembers-search-input'>
            <div className='search-icon'>
              <FaSearch />
            </div>
            <input className='input-findmembers'
              value={searchInput}
              type="text"
              placeholder='Find members'
              onChange={(e) => {
                  setSearchInput(e.target.value)
              }}
              disabled={disable}
            />
          </div>
      {/* added a div wrapper */}
      {searchInput && searchInput.length > 0 ? (
        <div className="userlist">
          {list
            .filter(user => {
              if (searchInput == '') {
                return ''
              } else if (
                user.uid.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return user
              }
            })
            .map(user => {
              return (
                <div className='filteredUserItems' key={user.id} id={user.id}>
                  <img src={avatar} height='20px' width='20px'onClick={addMember} id={user.id}/>
                  <h3 onClick={addMember} id={user.id}> {user.email} </h3>
                </div>
              )
            })}
        </div>)
        : null}
    </div>
  );
}
