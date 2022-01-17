import React from "react";
import "./styles.css";

export default function Note(props) {
  return (
    <div className="Note">
      <h3>{props.heading}</h3>
      <p>{props.detail}</p>
    </div>
  );
}
