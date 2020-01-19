import React from "react";
import Spinner from "./common/Spinner";
import MovieCardContainer from "./movie-card/MovieCardContainer";
import {url_img_poster} from "../tools/url";
import "./MovieBoard.css";

const MovieBoard = ({query, category, movieList}) => {
    return (
        <div className="movie-board">
            {!movieList ? (
                <Spinner />
            ) : (
                <React.Fragment>
                    <h1 className="movie-board-headline">
                        {query
                            ? "movie search results:"
                            : `${
                                  category === "popular"
                                      ? "popular movies"
                                      : category === "now-playing"
                                      ? "movies in theaters now"
                                      : category === "top-rated"
                                      ? "top rated movies"
                                      : "movies"
                              }:`}
                    </h1>
                    <div className="movie-board-content">
                        {movieList &&
                            movieList.map(movie => (
                                <MovieCardContainer
                                    key={movie.id}
                                    id={movie.id}
                                    img={
                                        movie.poster_path
                                            ? url_img_poster + movie.poster_path
                                            : null
                                    }
                                    title={movie.title}
                                />
                            ))}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default MovieBoard;
