import React from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";
import { url_img_poster } from "../tools/url";
import "./MovieBoard.css";

const MovieBoard = props => (
  <div className="movie-board">
    {!props ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <h1 className="movie-board-headline">Movies:</h1>
        <div className="movie-board-content">
          {props.movies &&
            props.movies.map(movie => (
              <MovieCard
                key={movie.id}
                img={url_img_poster + movie.poster_path}
              />
            ))}
        </div>
      </React.Fragment>
    )}
  </div>
);

export default connect(
  state => ({ ...state.movies }),
  null
)(MovieBoard);
