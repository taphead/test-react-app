import "./ReadBlock.css";

export default function ReadBlock({ name }) {
  return (
    <div className={name}>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
        <br />
        <br />
        <button className="readbutton">Read More</button>
      </p>
    </div>
  );
}
