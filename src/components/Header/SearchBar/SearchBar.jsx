import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { getAllUsers } from "../../../api/api-users";
import avatar from "../../../avatar-placeholder.png";
import "./SearchBar.scss";
import { CgLock } from "react-icons/cg";
import { channelsGet } from "../../../api/api-channels";

const SearchBarTemp = ({ handleOpenSearchBar }) => {

  const [itemsList, setItemsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const loginData = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

  const params = useParams();

  useEffect(() => {
    const headers = {
      token: loginData["access-token"],
      client: loginData.client,
      expiry: loginData.expiry,
      uid: loginData.uid,
    };

    (async () => {
      const response = await getAllUsers();


      const response2 = await channelsGet(headers);

      setItemsList(response["data"]["data"].concat(response2["data"]["data"]));

    })();

  }, []);

  console.log(itemsList);

  const searchResults = () => {


    const filteredResults = itemsList.filter((item) => {
      if (searchInput == "") {
        return "";
      } else if (item.hasOwnProperty("uid")) {
        if (item.uid.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
      } else if (!item.hasOwnProperty("uid")) {
        if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
      }
    });
    return (
      <div className="searchBar_results">
        {filteredResults.map((result) => {
          if (result.email) {
            return (
              <NavLink
                to={`/${params.uid}/messages/${result.id}`}
                key={result.id}
              >
                <div className="searchBar_results_items">
                  <img src={avatar} />
                  <h3>{result.email}</h3>
                </div>
              </NavLink>
            );
          } else {
            return (
              <NavLink
                to={`/${params.uid}/messages/${result.id}`}
                key={result.id}
              >
                <div className="searchBar_results_items">
                  <CgLock />
                  <h3>{result.name}</h3>
                </div>
              </NavLink>
            );
          }

        })}
      </div>
    );
  };

  return (
    <div className="searchBar_container">
      <div className="searchBar_items">
        <div className="searchBar_input">
          <FiSearch className="searchBar-icon" />
          <input
            type="text"
            autoFocus
            placeholder="Search User"
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <GrFormClose className="icon-close" onClick={handleOpenSearchBar} />
        </div>
        {searchResults()}
      </div>
    </div>
  );
};

export default SearchBarTemp;
