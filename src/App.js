import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
