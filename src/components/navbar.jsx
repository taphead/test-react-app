import "./navbar.css";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="container">
      <img src={logo} id="logo-image" alt="logo" />
      <div className="navbar">
        <span>Home</span>
        <span>New</span>
        <span>Popular</span>
        <span>Trending</span>
        <span>Categories</span>
      </div>
    </div>
  );
}
