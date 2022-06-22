import React from "react";
import RepElement from "../components/RepElement";
import Profile from "../components/Profile";
import ReposIsEmpty from "../components/ReposIsEmpty";
import Pagination from "./Pagination";

const Repositories = ({user, repos, page, totalPages, setPage, fetchRepo, searchQuery}) => {
    return(
    <div className="container">
        <Profile
            avatar_url={user.avatar_url}
            name={user.name}
            html_url={user.html_url}
            login={user.login}
            followers={user.followers}
            following={user.following}
        />

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
                {user.public_repos > 4 &&
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        public_repos={user.public_repos}
                        setPage={setPage}
                        fetchRepo={fetchRepo}
                        searchQuery={searchQuery}
                    />
                }
            </div>
        }
    </div>  
    )
}

export default Repositories