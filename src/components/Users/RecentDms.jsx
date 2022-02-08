import { useState, useEffect } from 'react'
import { getRecentDms } from './api-users.js'
import avatar from '../../avatar-placeholder.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const RecentDms = () => {
  const [recentDms, setRecentDms] = useState([])
  // let navigate = useNavigate();

  // const handleNavigate = (id) =>  {
  //   navigate(id)
  // }
  const params = useParams()

  useEffect(() => {
    if (params.uid) {
      handleGetRecentDms()
    }
  }, [params.uid])

  const handleGetRecentDms = () => {
    console.log('getting recent dms')
    getRecentDms()
      .then((res) => {
        setRecentDms(res['data']['data'])
        console.log(res['data']['data'])
      })
      .catch((error) => error)
  }
  // used index instead of id to avoid duplicate error while waiting for filter
  return (
    <ul className="direct-messages">
      {recentDms.map((UserList, index) => {
        const { id, email } = UserList
        return (
          <NavLink to={`${params.uid}/messages/${id}`} key={index}>
            <li>
              <img src={avatar} />
              <div className="online-status-on"></div>
              <h3>{email}</h3>
            </li>
          </NavLink>
        )
      })}
    </ul>
  )
}
export default RecentDms
