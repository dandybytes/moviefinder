import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    let [menuClosed, setMenuClosed] = useState(true);

    const toggleMenuClosed = () => setMenuClosed(prevMenuState => !prevMenuState);

    return (
        <div className={menuClosed ? "menu-closed" : "menu-open"} onClick={toggleMenuClosed}>
            <div className="menu-btn">
                <span className="menu-icon">&nbsp;</span>
            </div>
            <div className="menu-bg"></div>
            <nav className="menu-nav">
                <ul className="menu-ul">
                    <li className="menu-li">
                        <NavLink
                            to="/"
                            exact
                            className="menu-link"
                            activeClassName="menu-link-active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink
                            to="/favorites"
                            className="menu-link"
                            activeClassName="menu-link-active"
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li className="menu-li">
                        <NavLink
                            to="/about"
                            className="menu-link"
                            activeClassName="menu-link-active"
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
