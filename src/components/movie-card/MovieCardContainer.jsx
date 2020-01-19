import React, {Suspense} from "react";
import {Link} from "react-router-dom";
import "./MovieCardContainer.scss";

import MovieCardPlaceholder from "./MovieCardPlaceholder";
const MovieCardImage = React.lazy(() => import("./MovieCardImage"));

const MovieCardContainer = props => {
    return (
        <Link to={`/movie/${props.id}`} className="movie-card">
            {props.img ? (
                <Suspense fallback={<MovieCardPlaceholder title={props.title} />}>
                    <MovieCardImage img={props.img} />
                </Suspense>
            ) : (
                <MovieCardPlaceholder title={props.title} />
            )}
        </Link>
    );
};

export default MovieCardContainer;
