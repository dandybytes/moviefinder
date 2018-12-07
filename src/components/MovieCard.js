import React from "react";
import "./MovieCard.css";

const MovieCard = props => {
  // console.log("movie card props: ");
  // console.log(props);
  return (
    <div className="movie-card">
      {props.img ? (
        <img className="movie-card-img" src={props.img} alt="movie thumbnail" />
      ) : (
        <div className="movie-card-placeholder">
          <p>{props.title}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
