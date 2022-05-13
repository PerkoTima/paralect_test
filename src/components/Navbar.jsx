import React from "react";
import Logo from "../../src/img/Vector.svg";
import SearchIcon from "../../src/img/image.svg";

const Navbar = (props) => {

    const searchGit = (e) => {
        e.preventDefault()
        props.setPage(1)
        if(props.searchQuery){
          props.fetchUser(props.searchQuery)
          props.fetchRepo(props.searchQuery)
        }
      }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="searchBar">
                <form className="searchForm" onSubmit={searchGit}>
                    <img className="icon" src={SearchIcon} alt="" />
                    <input 
                        type="search"
                        name="search"
                        onChange={e => props.setSearchQuery(e.target.value)}
                        className="search"
                        placeholder="Enter GitHub username"
                    />
                </form>
            </div>
        </div>
    )
}

export default Navbar