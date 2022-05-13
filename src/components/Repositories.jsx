import React from "react";
import RepElement from "../components/RepElement";
import Profile from "../components/Profile";
import ReposIsEmpty from "../components/ReposIsEmpty";
import Pagination from "./Pagination";

const Repositories = (props) => {
    return(
    <div className="container">
        <Profile
            avatar_url={props.user.avatar_url}
            name={props.user.name}
            html_url={props.user.html_url}
            login={props.user.login}
            followers={props.user.followers}
            following={props.user.following}
        />

        {props.repos.length === 0 ?
        <ReposIsEmpty/>
        :   
        <div className="repositories">
            <h2>Repositories ({props.user.public_repos})</h2>
            <div className="repWeapper">
                {props.repos.map((rep) => 
                    <RepElement
                        html_url={rep.html_url}
                        key={rep.id}
                        name={rep.name}
                        description={rep.description}
                    />
                )}
            </div>
            {props.user.public_repos > 4 &&
                <Pagination
                    page={props.page}
                    totalPages={props.totalPages}
                    public_repos={props.user.public_repos}
                    setPage={props.setPage}
                    fetchRepo={props.fetchRepo}
                    searchQuery={props.searchQuery}
                />
            }
        </div>
        }
    </div>  
    )
}

export default Repositories