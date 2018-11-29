import React from "react";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a href="#" className="navbar-list-item-link">
              Home
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#" className="navbar-list-item-link">
              Favorites
            </a>
          </li>
          <li className="navbar-list-item">
            <a href="#" className="navbar-list-item-link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
