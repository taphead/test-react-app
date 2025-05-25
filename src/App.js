import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import BoldTextBlock from "./components/BoldTextBlock";
import ReadBlock from "./components/ReadBlock";
import NewBlock from "./components/NewBlock";
import Card from "./components/Card";
import cardImg1 from "./assets/image-retro-pcs.jpg";
import cardImg2 from "./assets/image-top-laptops.jpg";
import cardImg3 from "./assets/image-gaming-growth.jpg";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <div className="grid-container">
        <Banner />
        <BoldTextBlock />
        <ReadBlock />
        <NewBlock></NewBlock>
        <Card
          img={cardImg1}
          num="01"
          head="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        ></Card>
        <Card
          img={cardImg2}
          num="02"
          head="Top laptops of 2022"
          text="Our best picks for various needs and budgets."
        ></Card>
        <Card
          img={cardImg3}
          num="03"
          head="The growth of gaming"
          text="How the pandemic has sparked fresh opportunities."
        ></Card>
      </div>
    </div>
  );
}

export default App;
