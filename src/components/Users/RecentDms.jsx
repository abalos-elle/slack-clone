import { useState, useEffect } from "react";
import { getRecentDms } from "./api-users.js";
import avatar from "../../avatar-placeholder.png";

const RecentDms = () => {
  // const [userList, setUserList] = useState([]);
  const [recentDms, setRecentDms] = useState([]);

  const headers = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

  useEffect(() => {
    getRecentDms()
      .then((res) => {
        setRecentDms(res["data"]["data"]);
        console.log(res["data"]["data"]);
      })
      .catch((error) => error);
  }, []);

  return (
    <ul className="direct-messages">
      {recentDms.map((UserList) => {
        const { id, email } = UserList;
        return (
          <li key={id}>
            <img src={avatar} />
            <div className="online-status-on"></div>
            <span>{email}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default RecentDms;
