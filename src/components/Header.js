import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/" className="navbar-list-item-link">
              Home
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/favorites" className="navbar-list-item-link">
              Favorites
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about" className="navbar-list-item-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
