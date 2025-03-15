import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
function App() {
  return (
    <>
      <Navbar titleText="TextUtils" aboutText="About"/>
      <div className  ="container my-3">
      <TextFrom heading ="Analayz the text"/>
      </div>
      {/* <Navbar />  */}
    </>
  );
}

export default App;
