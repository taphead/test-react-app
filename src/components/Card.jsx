import "./Card.css";

export default function Card({ img, num, head, text, name }) {
  return (
    <div className="container" id={name}>
      <div>
        <img className="image" src={img} alt="some stuff idk" />
      </div>
      <div className="textblock">
        <h1 className="cardh1">{num}</h1>
        <h3 className="cardh3">{head}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
