import React, { useState, useRef } from "react";
import './App.css';
import SearchIcon from "../src/img/image.svg";
import Logo from "../src/img/Vector.svg";
import axios from "axios";
import RepElement from "./components/RepElement";
import Profile from "./components/Profile";
import InitialState from "./components/InitialState";
import UserNotFound from "./components/UserNotFound";
import Loader from "./components/Loader/Loader";
import ReactPaginate from 'react-paginate';
import ReposIsEmpty from "./components/ReposIsEmpty";

function App() {
const [user, setUser] = useState({})
const [repos, setRepos] = useState([])
const searchQuery = useRef()
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(true);
const [totalPages, setTotalPages] = useState(0);
const [page, setPage] = useState(1)

async function fetchUser(userName){
  try{
    setIsLoaded(true)
    const userData = await axios.get(`https://api.github.com/users/${userName}`,
    {
      headers: {
        'Authorization': "token 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",
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    setUser(userData.data)
    setTotalPages(Math.ceil(userData.data.public_repos / 4))
    setError(null)
    setIsLoaded(false)
  }catch (err){
    setIsLoaded(true)
    setError(err)
    setIsLoaded(false)
  }
}
async function fetchRepo(userName, page){
  try{
    const userRepos = await axios.get(`https://api.github.com/users/${userName}/repos`, {
      headers: {
        'Authorization': "token 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",
        'Accept': 'application/vnd.github.v3+json'
      },
      params: {
        per_page: 4,
        page: page
      }
    })
    setRepos(userRepos.data)
  } catch (err){
    console.log(err)
  }
}

const searchGit = (e) => {
  e.preventDefault()
  if(searchQuery.current.value){
    fetchUser(searchQuery.current.value)
    fetchRepo(searchQuery.current.value, page)
  }
}
const handlePageClick = (page) => {
  setPage(page.selected + 1);
  fetchRepo(searchQuery.current.value, page.selected + 1)
}

return(
  <div className="app">
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
            ref={searchQuery}
            className="search"
            placeholder="Enter GitHub username"
            />
        </form>
      </div>
    </div>
    
  {
    searchQuery.current === undefined || searchQuery.current.value === "" ?
    <InitialState/>
    :
      isLoaded ?
      <Loader/>
      :
      !error ?
      <div className="container">
      <Profile avatar_url={user.avatar_url} name={user.name} html_url={user.html_url} login={user.login} followers={user.followers} following={user.following}/>
      {repos.length === 0 ?
      <ReposIsEmpty/>
      :
      <div className="repositories">
      <h2>Repositories ({user.public_repos})</h2>
      <div className="repWeapper">
        {repos.map((rep) => 
          <RepElement
            html_url={rep.html_url}
            key={rep.id}
            name={rep.name}
            description={rep.description}
          />
        )}
      </div>
      <div className="paginationWrapper">
        <div className="paginationItems">
          {page * 4 - 3}-{page === totalPages ? user.public_repos : page * 4} of {user.public_repos} items
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLinkClassName="page"
          nextClassName="next"
          previousClassName="prev"
          nextLinkClassName="page"
          activeClassName="page_current"
          pageCount={totalPages}
          previousLabel="<"
          className="pagination"
        />
      </div>
    </div>
    }
    </div>
    :
    <UserNotFound/>
  }
  </div>
    
)
}

export default App;
