import React from "react";
import "./MovieCardImage.scss";

const MovieCardImage = ({img}) => (
    <img className="movie-card-img" src={img} alt="movie thumbnail" />
);

export default MovieCardImage;
