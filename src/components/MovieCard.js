import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = props => {
  // console.log("movie card props: ");
  // console.log(props);
  return (
    <Link to={`/movie/${props.id}`} className="movie-card">
      {props.img ? (
        <img className="movie-card-img" src={props.img} alt="movie thumbnail" />
      ) : (
        <div className="movie-card-placeholder">
          <p>{props.title}</p>
        </div>
      )}
    </Link>
  );
};

export default MovieCard;
