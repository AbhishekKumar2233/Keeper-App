import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Note(props) {
  //delete func
  function handleDel() {
    props.onDelete(props.id);
  }

  return (
    <div className="Note">
      <h4>{props.heading}</h4>

      <p>{props.detail}</p>
      <button onClick={handleDel}>
        <DeleteIcon />
      </button>
    </div>
  );
}
