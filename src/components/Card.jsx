import "./Card.css";

export default function Card({ img, num, head, text }) {
  return (
    <div class="container">
      <div>
        <img className="image" src={img} alt="some stuff idk" />
      </div>
      <div className="textblock">
        <h1>{num}</h1>
        <h3>{head}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
