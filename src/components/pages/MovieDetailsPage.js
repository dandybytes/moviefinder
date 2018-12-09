import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../tools/fetch";
import { setMovieDetails } from "../../actions/actions-movie-details";
import MovieDetailsCore from "./../MovieDetailsCore";
import Spinner from "./../Spinner";
import "./MovieDetailsPage.css";

class MovieDetailsPage extends Component {
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
      <div className="movie-details-page">
        {this.props.status_code && <h1>movie cannot be found</h1>}
        {this.props.movie.id ? (
          <MovieDetailsCore movie={this.props.movie} />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default connect(
  state => state,
  { setMovieDetails }
)(MovieDetailsPage);
