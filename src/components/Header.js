import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "./common/Logo";
import Menu from "./common/Menu";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <Logo />
            <Menu />
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-list-item">
                        <NavLink
                            to="/movies"
                            exact
                            className="navbar-list-item-link"
                            activeClassName="navbar-list-item-link-active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-list-item">
                        <NavLink
                            to="/favorites"
                            className="navbar-list-item-link"
                            activeClassName="navbar-list-item-link-active"
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li className="navbar-list-item">
                        <NavLink
                            to="/about"
                            className="navbar-list-item-link"
                            activeClassName="navbar-list-item-link-active"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
