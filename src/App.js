import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

// function createNotes(notes) {
//   return <Note heading={notes.Heading} detail={notes.Detail} />;
// }

export default function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((notes) => {
        return <Note heading={notes.Heading} detail={notes.Detail} />;
      })}
      <Footer />
    </div>
  );
}
