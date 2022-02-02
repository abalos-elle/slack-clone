import { useState, useEffect } from "react";
import { FetchUsers } from "./api-users.js";
import { getConfig } from "./sampleConfig";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    FetchUsers(getConfig())
      .then((res) => {
        setUserList(res["data"]["data"]);
        setLoading(false);
        console.log(res["data"]["data"]);
      })
      .catch((err) => {
        setError(err);
        setLoading(true)
      });
  }, []);

  return (
    <div className="userList">
      <h1>User List</h1>
      {hasError ? <p>{hasError.message}</p> : null}
      {!isLoading ? (
        userList.map((UserList) => {
          const { id, email } = UserList;
          return (
            <div key={id}>
              <p>Name: {email}</p>
            </div>
          );
        })
      ) : (
        <p>{isLoading}</p>
      )}
    </div>
  );
};
export default UserList;
