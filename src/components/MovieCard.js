import React from "react";
import "./MovieCard.css";

const MovieCard = props => {
  console.log("movie card props: ");
  console.log(props);
  return (
    <div className="movie-card">
      <img className="movie-card-img" src={props.img} alt="movie thumbnail" />
    </div>
  );
};

export default MovieCard;
