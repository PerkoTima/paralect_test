import React from "react";

const RepElement = ({html_url, name, description}) => {
    return(
        <div className="rep">
            <a className="repName" target="_blank" rel="noreferrer" href={html_url}>{name}</a>
            <div className="repDescription">{description}</div>
        </div>
    )
}

export default RepElement