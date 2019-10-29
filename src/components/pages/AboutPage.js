import React from "react";
import TabBoard from "../common/TabBoard";
import AboutFeatures from "./../about/AboutFeatures";
import AboutIntro from "./../about/AboutIntro";
import AboutTech from "./../about/AboutTech";
import "./AboutPage.css";

const AboutPage = () => {
    const tabs = [
        {title: "Intro", content: <AboutIntro />},
        {title: "Features", content: <AboutFeatures />},
        {title: "Tech", content: <AboutTech />}
    ];

    return (
        <div className="about-container">
            <TabBoard tabs={tabs} />
        </div>
    );
};

export default AboutPage;
