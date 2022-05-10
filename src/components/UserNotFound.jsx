import React from "react";
import Union from "../../src/img/Union.svg";

const UserNotFound = () => {
    return(
        <div className="initialState">
            <img src={Union} alt="Unoin"/>
            <p>User not found</p>
        </div>
    )
}

export default UserNotFound