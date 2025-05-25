import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import BoldTextBlock from "./components/BoldTextBlock";
import ReadBlock from "./components/ReadBlock";
import NewBlock from "./components/NewBlock";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <div className="grid-container">
        <Banner />
        <BoldTextBlock />
        <ReadBlock />

        <NewBlock></NewBlock>
      </div>
    </div>
  );
}

export default App;
