import React, { useState } from "react";
import "./styles.css";

export default function Createarea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //change func
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  //onclick func
  function submitNote(event) {
    props.onAdd(note);
    // console.log(note);
    event.preventDefault();
  }

  return (
    <div className="create-area">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <br />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note.."
          rows="3"
        />
        <br />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
