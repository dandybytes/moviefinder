import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-credits">
                <a
                    href="https://www.themoviedb.org/about/logos-attribution"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="moviedb-logo"
                        src="/moviedb-logo.png"
                        alt="powered by the MovieDB API"
                    />
                </a>
            </div>
            <div className="footer-gap"></div>
            <div className="footer-note">
                <q>Television is chewing gum for the eyes.</q>
            </div>
        </footer>
    );
};

export default Footer;
