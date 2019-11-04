import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "./common/Logo";
import Menu from "./common/Menu";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="header-content">
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
                                to="/popular"
                                className="navbar-list-item-link"
                                activeClassName="navbar-list-item-link-active"
                            >
                                Popular
                            </NavLink>
                        </li>
                        <li className="navbar-list-item">
                            <NavLink
                                to="/toprated"
                                className="navbar-list-item-link"
                                activeClassName="navbar-list-item-link-active"
                            >
                                Top
                            </NavLink>
                        </li>
                        <li className="navbar-list-item">
                            <NavLink
                                to="/nowplaying"
                                className="navbar-list-item-link"
                                activeClassName="navbar-list-item-link-active"
                            >
                                Current
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
            </div>
        </header>
    );
};

export default Header;
