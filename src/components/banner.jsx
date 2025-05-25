import banner from "../assets/image-web-3-desktop.jpg";
import "./banner.css";
export default function Banner({ name }) {
  return (
    <div className={name}>
      <img src={banner} alt="banner" className="banner"></img>
    </div>
  );
}
