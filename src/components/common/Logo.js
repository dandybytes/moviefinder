import React from "react";
import {Link} from "react-router-dom";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="logo">
            <Link className="logo-link" to="/">
                <h1 className="logo-title">MovieFinder</h1>
            </Link>
        </div>
    );
};

export default Logo;
