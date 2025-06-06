import Banner from "../components/banner";
import BoldTextBlock from "../components/BoldTextBlock";
import ReadBlock from "../components/ReadBlock";
import NewBlock from "../components/NewBlock";
import Card from "../components/Card";
import cardImg1 from "../assets/image-retro-pcs.jpg";
import cardImg2 from "../assets/image-top-laptops.jpg";
import cardImg3 from "../assets/image-gaming-growth.jpg";

export default function NewsView() {
  return (
    <div className="grid-container">
      <Banner name="banner" />
      <BoldTextBlock name="boldtext" />
      <ReadBlock name="readblock" />
      <NewBlock name="newblock"></NewBlock>
      <Card
        img={cardImg1}
        num="01"
        head="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
        name="card1"
        className="card1"
      ></Card>
      <Card
        img={cardImg2}
        num="02"
        head="Top laptops of 2022"
        text="Our best picks for various needs and budgets."
        name="card2"
        className="card2"
      ></Card>
      <Card
        img={cardImg3}
        num="03"
        head="The growth of gaming"
        text="How the pandemic has sparked fresh opportunities."
        name="card3"
        className="card3"
      ></Card>
    </div>
  );
}
