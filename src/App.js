import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import Createarea from "./components/Createarea";

// function createNotes(notes) {
//   return <Note heading={notes.Heading} detail={notes.Detail} />;
// }

//func for get data from createarea
function addNote(note) {
  console.log(note);
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Createarea onAdd={addNote} />
      <div className="container">
        {notes.map((notes) => {
          return <Note heading={notes.Heading} detail={notes.Detail} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
