import "./navbar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navcontainer">
      <img src={logo} id="logo-image" alt="logo" />
      <div className="navbar">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/new" className="nav-item">
          New
        </Link>
        <Link to="/popular" className="nav-item">
          Popular
        </Link>
        <Link to="/trending" className="nav-item">
          Trending
        </Link>
        <Link to="/categories" className="nav-item">
          Categories
        </Link>
      </div>
    </div>
  );
}
