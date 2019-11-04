import React from "react";
import {url_img_backdrop, url_img_poster} from "../tools/url";
import "./MovieDetailsCore.css";

const MovieDetailsCore = ({movie}) => {
    let tagline = movie.tagline.toLowerCase();
    // get rid of the trailing period
    tagline = tagline[tagline.length - 1] === "." ? tagline.slice(0, tagline.length - 1) : tagline;

    const containerStyle =
        window.innerWidth > 500
            ? {
                  backgroundImage: movie.backdrop_path
                      ? `url("${url_img_backdrop}${movie.backdrop_path}")`
                      : "var(--color-1)"
              }
            : {};

    const runtime = movie.runtime
        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
        : "unknown";

    // budget (number -> comma-separated string preceded by $ sign)
    let budget = [];
    if (movie.budget > 0) {
        budget[0] = movie.budget.toString();
        while (budget[0].length > 3) {
            budget.push(budget[0].slice(budget[0].length - 3));
            budget[0] = budget[0].slice(0, budget[0].length - 3);
        }
        budget = "$" + budget.join(",");
    } else {
        budget = "no info";
    }

    return (
        <div className="movie-details-container" style={containerStyle}>
            <div className="movie-details-content">
                <div className="movie-details-poster">
                    {movie.poster_path && (
                        <img src={`${url_img_poster}${movie.poster_path}`} alt="movie poster" />
                    )}
                </div>
                <div className="movie-details-text">
                    <div className="movie-details-heading">
                        <h1 className="movie-details-title">{movie.title}</h1>
                        <h3 className="movie-details-tagline">
                            — <span>{tagline ? tagline : "—"}</span> —
                        </h3>
                    </div>
                    <p className="movie-details-genre">
                        {movie.genres.map(obj => obj.name).join(", ")}
                    </p>
                    <p className="movie-details-description">{movie.overview}</p>
                    <p className="movie-details-date">Release date: {movie.release_date}</p>
                    <p className="movie-details-rating">
                        Rating:{" "}
                        <span className="movie-details-rating-number">{movie.vote_average}</span>{" "}
                        <i className="fas fa-star movie-details-rating-icon" />
                    </p>
                    <ul className="movie-details-stat-stripe">
                        <li className="movie-details-stat-stripe-item">
                            <i className="far fa-clock" />
                            <span>runtime: </span>
                            <span>{runtime}</span>
                        </li>

                        <li className="movie-details-stat-stripe-item">
                            <i className="far fa-money-bill-alt" />
                            <span>budget: </span>
                            <span>{budget}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsCore;
