import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "./../../tools/fetch";
import { setMovieDetails } from "./../../actions/actions-movie-details";
import "./MovieDetails.css";

class MovieDetails extends Component {
  state = {};

  componentDidMount() {
    fetchMovieDetails(this.props.match.params.movieId).then(result =>
      this.props.setMovieDetails(result)
    );
  }

  render() {
    console.log("movie details props");
    console.log(this.props);
    return (
      <div className="movie-details">
        <p>movie details component</p>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state.movie }),
  { setMovieDetails }
)(MovieDetails);
