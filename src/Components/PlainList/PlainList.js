import React from "react";
import "./PlainList.css"

function PlainList({componentState, variable, title}){
    return (
        <div id="plain-list" className="border-primary margin-primary">
            <h3 id="plain-list-title">{title}</h3>
            <ul>
                {
                    componentState[variable].map(variable => {
                        return <li key={variable}>{variable}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PlainList;