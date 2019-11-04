import React from "react";
import "./AboutIntro.css";

const AboutIntro = () => {
    return (
        <div className="about-app-intro">
            <p>movie search and bookmarking app</p>
            <p>created with React.js</p>
            <p>
                powered by{" "}
                <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
                    TheMovieDB.org
                </a>{" "}
                API
            </p>
            <a
                className="about-app-source-code-link"
                href="https://github.com/dandybytes/moviefinder"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-code-branch" />
                &nbsp; source code
            </a>
        </div>
    );
};

export default AboutIntro;
