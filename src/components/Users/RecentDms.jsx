import { useState, useEffect } from 'react'
import { getRecentDms } from './api-users.js'
import avatar from '../../avatar-placeholder.png'
import { NavLink } from "react-router-dom";

const RecentDms = () => {
  const [recentDms, setRecentDms] = useState([])

  useEffect(() => {
    getRecentDms()
      .then((res) => {
        setRecentDms(res['data']['data'])
        // console.log(res["data"]["data"]);
      })
      .catch((error) => error)
  }, [])
  console.log(recentDms)

  return (
    <ul className="direct-messages">
      {recentDms.map((UserList) => {
        const { id, email } = UserList
        return (
          <NavLink to={`/user/${id}`} key={id}>
            <li>
              <img src={avatar} />
              <div className="online-status-on"></div>
              <h3>{email}</h3>
            </li>
          </NavLink>
        );
      })}
    </ul>
  )
}
export default RecentDms
