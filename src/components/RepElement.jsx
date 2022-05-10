import React from "react";

const RepElement = (props) => {
    return(
        <div className="rep">
            <a className="repName" target="_blank" rel="noreferrer" href={props.html_url}>{props.name}</a>
            <div className="repDescription">{props.description}</div>
        </div>
    )
}

export default RepElement