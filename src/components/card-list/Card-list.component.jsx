import React from "react";
import "./card-list.css";
import { Card } from "../Card/Card.component";



export const Cardlist = (props) => {
  return (
    <div className="card-list">
      {props.monesters.map((monester) => (
        <Card  key={monester.id} monester={monester}/>
      ))}
    </div>
  );
};
