import React from "react";
import SearchIcon from "../../src/img/image.svg";

const InitialState = () => {
    return(
        <div className="initialState">
            <img src={SearchIcon} alt="Search icon"/>
            <p>Start with searching<br/> a GitHub user</p>
        </div>
    )
}

export default InitialState