import React from "react";
import cinemaIcon from "../../assets/img/cinema.png";
import "./FilmStrip.css";

const FilmStrip = () => {
    return (
        <div className="filmstrip">
            <div className="filmstrip-container">
                <div className="filmstrip-perforations" />
                <div className="filmstrip-content">
                    <div className="filmstrip-frame">
                        <img src={cinemaIcon} alt="cinema logo" />
                    </div>
                    <div className="filmstrip-frame">Movie</div>
                    <div className="filmstrip-frame">Finder</div>
                    <div className="filmstrip-frame">
                        <img src={cinemaIcon} alt="cinema logo" />
                    </div>
                    <div className="filmstrip-frame">Movie</div>
                    <div className="filmstrip-frame">Finder</div>
                </div>
                <div className="filmstrip-perforations" />
            </div>
        </div>
    );
};

export default FilmStrip;
