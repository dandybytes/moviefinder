import React from "react";
import { url_img_backdrop, url_img_poster } from "../tools/url";
import "./MovieDetailsCore.css";

const MovieDetailsCore = ({ movie }) => {
  // console.log("movie details core props: ");
  // console.log(movie);

  let tagline = movie.tagline.toLowerCase();
  // get rid of the trailing period
  tagline =
    tagline[tagline.length - 1] === "."
      ? tagline.slice(0, tagline.length - 1)
      : tagline;

  return (
    <div
      className="movie-details-container"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url("${url_img_backdrop}${movie.backdrop_path}")`
          : "var(--color-1)"
      }}
    >
      <div className="movie-details-content">
        <div className="movie-details-poster">
          {movie.poster_path && (
            <img
              src={`${url_img_poster}${movie.poster_path}`}
              alt="movie poster"
            />
          )}
        </div>
        <div className="movie-details-text">
          <h1 className="movie-details-title">{movie.title}</h1>
          <h3 className="movie-details-tagline">
            — <span>{tagline ? tagline : "—"}</span> —
          </h3>
          <p className="movie-details-genre">
            {movie.genres.map(obj => obj.name).join(", ")}
          </p>
          <p className="movie-details-description">{movie.overview}</p>
          <p className="movie-details-date">
            Release date: {movie.release_date}
          </p>
          <p className="movie-details-rating">
            Rating:{" "}
            <span className="movie-details-rating-number">
              {movie.vote_average}
            </span>{" "}
            <i className="fas fa-star movie-details-rating-icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCore;
