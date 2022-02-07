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
  //remember the props(id) value when call func
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
        // here we return all notes , where index
        // does not equal the id
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Createarea onAdd={addNote} />
      <div className="container">
        {/* create note data  */}
        {/* we get id and key from map function using index */}
        {Notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
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
