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
        {this.props.status_code && <h1>movie cannot be found</h1>}
      </div>
    );
  }
}

export default connect(
  state => state,
  { setMovieDetails }
)(MovieDetails);
