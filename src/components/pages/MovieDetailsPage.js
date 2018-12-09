import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../../tools/fetch";
import { setMovieDetails } from "../../actions/actions-movie-details";
import MovieDetailsCore from "./../MovieDetailsCore";
import MovieStatStripe from "./../MovieStatStripe";
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
        {/* {this.props.movie.status_code && <h1>movie cannot be found</h1>} */}
        {this.props.movie.id ? (
          <React.Fragment>
            <MovieDetailsCore movie={this.props.movie} />
            <MovieStatStripe movie={this.props.movie} />
          </React.Fragment>
        ) : this.props.movie.status_code ? (
          <h1 style={{ color: "red" }}>movie cannot be found</h1>
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
