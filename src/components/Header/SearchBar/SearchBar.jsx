import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { searchUser } from '../../../api/api-users'
import avatar from '../../../avatar-placeholder.png';
import './SearchBar.scss';


const SearchBar = ({handleOpenSearchBar}) =>  {
  
  const [searchString, setSearchString] = useState("");
  //to record search result
  const [searchResult, setSearchResult] = useState([]);

  const params = useParams();
  

  const handleUserInput = async (event) => {
    setSearchString(event.target.value);
    //trigger searchUser in API
    const result = await searchUser(searchString)
    setSearchResult(result)
      
  };

  const searchItemList = searchResult.map((item) => {
    return (
      <NavLink to={`/${params.uid}/messages/${item.id}`} onClick={handleOpenSearchBar} key={item.id}>
        <div className="searchBar_results_items">
          <img src={avatar} alt="" />
          <h3>{item.email}</h3>
        </div>
      </NavLink>
    );
  });



  return (
    <div className="searchBar_container" >
            <div className="searchBar_items">
                <div className="searchBar_input">
                    <FiSearch className="searchBar-icon" />
                    <input type="text" 
                    placeholder="Search User" onChange={handleUserInput}/>
                    <GrFormClose className="icon-close" onClick={handleOpenSearchBar} />
                </div>

                <div className="searchBar_results">
                    {searchItemList}
                </div>
            </div>
        </div>
  )
}

export default SearchBar;