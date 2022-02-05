import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import Createarea from "./components/Createarea";
import { useState } from "react";

// function createNotes(notes) {
//   return <Note heading={notes.Heading} detail={notes.Detail} />;
// }

export default function App() {
  const [Notes, setNotes] = useState([]);

  //func for get data from createarea
  //newNote is a prop that getting the value from creatarea
  //...prevNotes is spread operator
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; //array
    });
    console.log(newNote);
  }

  //delete function
  //when we call handleDel func
  //this on is called using props
  function deleteNote(id) {
    console.log("Done");
  }

  return (
    <div className="App">
      <Header />
      <Createarea onAdd={addNote} />
      <div className="container">
        {/* create note data  */}
        {Notes.map((noteItem) => {
          return (
            <Note
              heading={noteItem.title}
              detail={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        {notes.map((notes) => {
          return <Note heading={notes.Heading} detail={notes.Detail} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
