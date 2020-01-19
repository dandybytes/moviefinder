import React from "react";
import {Link} from "react-router-dom";
import "./MovieCardContainer.scss";

import MovieCardImage from "./MovieCardImage";
import MovieCardPlaceholder from "./MovieCardPlaceholder";

const MovieCardContainer = props => {
    return (
        <Link to={`/movie/${props.id}`} className="movie-card">
            {props.img ? (
                <MovieCardImage img={props.img} />
            ) : (
                <MovieCardPlaceholder title={props.title} />
            )}
        </Link>
    );
};

export default MovieCardContainer;
