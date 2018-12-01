import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { url_img_poster } from "../tools/url";
import "./MovieBoard.css";

class MovieBoard extends Component {
  state = { isLoading: true };

  componentDidUpdate() {
    this.props.movies &&
      this.state.isLoading &&
      this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="movie-board">
        <h1 className="movie-board-headline">Movies:</h1>
        <div className="movie-board-content">
          {!this.state.isLoading &&
            this.props.movies.map(movie => (
              <MovieCard
                key={movie.id}
                img={url_img_poster + movie.poster_path}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies.movies });

export default connect(
  mapStateToProps,
  null
)(MovieBoard);
