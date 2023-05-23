import React from "react";
import "./PlainList.css"

function PlainList({componentState, variable, title}){
    return (
        <div id="plain-list" className="border-primary margin-primary">
            <h3 id="plain-list-title">{title}</h3>
            <ul>
                {
                    componentState[variable].map(variable => {
                        return <li key={variable.name}>
                            <p className="item-name-and-value">
                                <span className="name-and-shape">
                                    <span className="name">{variable.name}</span>
                                    <span className="shape">{` ${variable.shape? `(${variable.shape})` : ""}`}</span>
                                </span>
                                <span className="value">{variable.value}</span>
                            </p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default PlainList;