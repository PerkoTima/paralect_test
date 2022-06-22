import React from "react";
import Followers from "../../src/img/followers.svg";
import Following from "../../src/img/following.svg";

const Profile = ({avatar_url, name, html_url, login, followers, following}) => {
    return(
        <div className="profile">
            <div className="photo">
                <img src={avatar_url} alt="Profile Avatar"/>
            </div>
            <div className="name">{name}</div>
            <a className="profileLink" rel="noreferrer" target="_blank" href={html_url}>{login}</a>
            <div className="follow">
                <div className="followers"><img src={Followers} alt="Followers"/><span>{followers} followers</span></div>
                <div className="following"><img src={Following} alt="Following"/><span>{following} following</span></div>
            </div>
        </div>
    )
}

export default Profile