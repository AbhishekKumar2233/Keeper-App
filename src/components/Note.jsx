import React from "react";
import "./styles.css";

export default function Note(props) {
  //delete func
  function handleDel() {
    props.onDelete(5);
  }

  return (
    <div className="Note">
      <h3>{props.heading}</h3>
      <p>{props.detail}</p>
      <button onClick={handleDel}>Delete</button>
    </div>
  );
}
