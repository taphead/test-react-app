import "./navbar.css";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navcontainer">
      <img src={logo} id="logo-image" alt="logo" />
      <div className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link nav-item" : "nav-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/new"
          className={({ isActive }) =>
            isActive ? "active-link nav-item" : "nav-item"
          }
        >
          New
        </NavLink>
        <NavLink
          to="/popular"
          className={({ isActive }) =>
            isActive ? "active-link nav-item" : "nav-item"
          }
        >
          Popular
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            isActive ? "active-link nav-item" : "nav-item"
          }
        >
          Trending
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "active-link nav-item" : "nav-item"
          }
        >
          Categories
        </NavLink>
      </div>
      <img src={menu} id="menu-image" alt="menu" />
    </div>
  );
}
