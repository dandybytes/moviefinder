import React from "react";
import "./AboutFeatures.css";

const AboutFeatures = () => {
    return (
        <div className="about-features">
            {/* <p className="about-features-headline">features / functionality:</p> */}
            <h4 className="about-home-page">Home Page Features</h4>
            <ul className="about-feature-list">
                <li>displays list of popular movies by default</li>
                <li>input keywords used to query the API to retrieve relevant movies</li>
                <li>movie cards can be clicked to open a separate page with details</li>
                <li>...</li>
            </ul>
            <h4 className="about-details-page">Movie Details Page Features</h4>
            <ul className="about-feature-list">
                <li>displays detailed information about a chosen movie</li>
                <li>...</li>
            </ul>
        </div>
    );
};

export default AboutFeatures;
