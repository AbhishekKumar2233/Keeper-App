import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";

export default function Createarea(props) {
  const [isExpend, setExpend] = useState(false);

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
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  //expend function
  function expand() {
    setExpend(true);
  }

  return (
    <div className="create-area">
      <form>
        {isExpend ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <br />
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note.."
          rows={isExpend ? 3 : 1}
        />
        <br />
        <Zoom in={isExpend}>
          <button onClick={submitNote}>Add</button>
        </Zoom>
      </form>
    </div>
  );
}
