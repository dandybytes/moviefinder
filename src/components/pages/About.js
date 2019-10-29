import React, {Component} from "react";
import "./About.css";

class About extends Component {
    state = {};
    render() {
        return (
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">Movie Finder</h2>
                    <h4 className="about-subtitle">
                        movie search app powered by{" "}
                        <a
                            href="https://www.themoviedb.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            the Movie DB
                        </a>{" "}
                        API
                    </h4>
                </div>
                <div className="about-tech-stack">
                    {/* <p className="about-tech-stack-headline">built with:</p> */}
                    <ul className="about-tech-stack-list">
                        <li className="about-tech-stack-list-item">React</li>
                        <li className="about-tech-stack-list-item">Redux</li>
                        <li className="about-tech-stack-list-item">React Router</li>
                    </ul>
                </div>
                <div className="about-features">
                    {/* <p className="about-features-headline">features / functionality:</p> */}
                    <h4 className="about-home-page">Home Page Features</h4>
                    <ul className="about-features-list">
                        <li>displays list of popular movies by default</li>
                        <li>input keywords used to query the API to retrieve relevant movies</li>
                        <li>movie cards can be clicked to open a separate page with details</li>
                        <li>...</li>
                    </ul>
                    <h4 className="about-details-page">Movie Details Page Features</h4>
                    <ul className="about-features-list">
                        <li>displays detailed information about a chosen movie</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
