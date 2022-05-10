import React from "react";
import Empty from "../../src/img/empty.svg";

const ReposIsEmpty = () => {
    return(
        <div className="empty">
            <img src={Empty} alt="Repository list is empty" />
            <p>Repository list is empty</p>
        </div>
    )
}

export default ReposIsEmpty