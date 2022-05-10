import React from "react";
import Followers from "../../src/img/followers.svg";
import Following from "../../src/img/following.svg";

const Profile = (props) => {
    return(
        <div className="profile">
            <div className="photo"><img src={props.avatar_url} alt="Profile Avatar"/></div>
            <div className="name">{props.name}</div>
            <a className="profileLink" rel="noreferrer" target="_blank" href={props.html_url}>{props.login}</a>
            <div className="follow">
                <div className="followers"><img src={Followers} alt="Followers"/><span>{props.followers} followers</span></div>
                <div className="following"><img src={Following} alt="Following"/><span>{props.following} following</span></div>
            </div>
        </div>
    )
}

export default Profile