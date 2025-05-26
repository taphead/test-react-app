import "./NewBlock.css";

export default function NewBlock({ name }) {
  return (
    <div className={name}>
      <div className="newblockdiv">
        <h2>New</h2>
        <h3 className="blockhead">Hydrogen vs Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />
        <h3 className="blockhead">The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <h3 className="blockhead">Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}
