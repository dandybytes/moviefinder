import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-credits">
        <img
          className="moviedb-logo"
          src="./moviedb-logo.png"
          alt="powered by the MovieDB API"
        />
      </div>
      <div className="footer-note">
        <q>Television is chewing gum for the eyes.</q>
      </div>
      <div className="footer-social-media">
        <a href="/">
          <i className="fab fa-twitter-square" />
        </a>
        <a href="/">
          <i className="fab fa-facebook-square" />
        </a>
        <a href="/">
          <i className="fab fa-snapchat-square" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
