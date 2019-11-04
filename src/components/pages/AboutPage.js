import React from "react";
import TabBoard from "../common/TabBoard";
import AboutFeatures from "./../about/AboutFeatures";
import AboutIntro from "./../about/AboutIntro";
import AboutTech from "./../about/AboutTech";
import Button from "../common/Button";
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

            <Button href={"/movies"} className="button-animated-borders">
                Let me try it!
            </Button>
        </div>
    );
};

export default AboutPage;
