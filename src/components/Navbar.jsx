import React from "react";
import Logo from "../../src/img/Vector.svg";
import SearchIcon from "../../src/img/search_icon.svg";

const Navbar = ({searchQuery, fetchRepo, fetchUser, setSearchQuery, setPage}) => {

    const searchGit = (e) => {
        e.preventDefault()
        setPage(1)
        if(searchQuery){
            fetchUser(searchQuery)
            fetchRepo(searchQuery)
        }
    }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="searchBar">
                <form className="searchForm" onSubmit={searchGit}>
                    <img className="icon" src={SearchIcon} alt="Github Icon" />
                    <input 
                        type="search"
                        name="search"
                        onChange={e => setSearchQuery(e.target.value)}
                        className="search"
                        placeholder="Enter GitHub username"
                    />
                </form>
            </div>
        </div>
    )
}

export default Navbar