import React, { useState } from "react";
import './App.css';
import InitialState from "./components/InitialState";
import UserNotFound from "./components/UserNotFound";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar";
import {getUser, getRepo} from "./API/GitData"
import Repositories from "./components/Repositories";

function App() {
const [user, setUser] = useState({})
const [repos, setRepos] = useState([])
const [searchQuery, setSearchQuery] = useState('')
const [error, setError] = useState(null)
const [isLoaded, setIsLoaded] = useState(false)
const [totalPages, setTotalPages] = useState(0)
const [page, setPage] = useState(1)
const [initialState, setInitialState] = useState(true)

async function fetchUser(userName){
  try{
    setIsLoaded(true)
    const userData = await getUser(userName)
    setUser(userData.data)
    setTotalPages(Math.ceil(userData.data.public_repos / 4))
    setError(null)
    setIsLoaded(false)
    setInitialState(false)
  }catch (err){
    setIsLoaded(true)
    setError(err)
    setIsLoaded(false)
  }
}
async function fetchRepo(userName, page){
  try{
    const userRepos = await getRepo(userName, page)
    setRepos(userRepos.data)
  } catch (err){
    // console.log(err)
  }
}

return(
  <div className="app">
    <Navbar
      setSearchQuery={setSearchQuery}
      fetchUser={fetchUser}
      fetchRepo={fetchRepo}
      page={page}
      setPage={setPage}
      searchQuery={searchQuery}
    />
    
    {isLoaded && <Loader/>}
    {initialState && <InitialState/>}
    {!error ?
      <Repositories 
        page={page}
        setPage={setPage}
        fetchRepo={fetchRepo}
        user={user}
        repos={repos}
        searchQuery={searchQuery}
        totalPages={totalPages}
      />
      :
      <UserNotFound/>
    }
    
  </div>
    
)
}

export default App;
