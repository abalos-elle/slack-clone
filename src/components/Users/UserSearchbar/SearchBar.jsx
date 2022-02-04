import { useState, useEffect } from 'react'
import { getAllUsers } from '.././api-users.js'
import './SearchBar.scss'
import avatar from '../../../avatar-placeholder.png'

const SearchBar = ({ className }) => {
  const [userList, setUserList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUserList(res['data']['data'])
        // console.log(res["data"]["data"]);
      })
      .catch((error) => error)
  }, [])

  return (
    // added classname props to change css when reused
    <div className={`${className} searchUser-container`}>
      <input
        type="text"
        placeholder="Search User"
        onChange={(event) => {
          setSearchInput(event.target.value)
        }}
      />

      {
        // only show results when there is user input to avoid blank white padding
        searchInput.length > 0 ? (
          <ul className="filteredUsers">
            {userList
              .filter((user) => {
                if (searchInput == '') {
                  return ''
                } else if (
                  user.uid.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  console.log(user)
                  return user
                }
              })
              .map((user) => {
                const { id, email } = user
                return (
                  <li key={id}>
                    <img src={avatar} />
                    <span>{email}</span>
                  </li>
                )
              })}
          </ul>
        ) : null
      }
    </div>
  )
}

export default SearchBar
