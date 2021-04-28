import React from "react";
import "./card-style.css"
export const Card = props =>(
    <div className="card-container">
    <img alt="Monster" src={`https://robohash.org/${props.monester.id}?set1=set2&size=180x180`}></img>
    <h2>{props.monester.name}</h2>
    <p>{props.monester.email}</p>
    </div>
)