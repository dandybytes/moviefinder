import React from "react";
import {Link} from "react-router-dom";
import FilmStrip from "./FilmStrip";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="logo">
            <Link className="logo-link" to="/movies">
                <FilmStrip />
            </Link>
        </div>
    );
};

export default Logo;
