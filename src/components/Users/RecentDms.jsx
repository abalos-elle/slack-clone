import { useState, useEffect } from 'react'
import { getRecentDms } from './api-users.js'
import avatar from '../../avatar-placeholder.png'

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
          <li key={id}>
            <img src={avatar} />
            <div className="online-status-on"></div>
            <span>{email}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default RecentDms
