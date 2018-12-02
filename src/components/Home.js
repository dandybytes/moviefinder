import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchMoviesByKeyword } from "./../tools/fetch";
import { setMovies } from "../actions/actions-movie-list";
import Poster from "./Poster";
import SearchBar from "./SearchBar";
import MovieBoard from "./MovieBoard";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    if (this.props.movies.length === 0) {
      switch (this.props.category) {
        case "query":
          fetchMoviesByKeyword(this.props.query).then(result =>
            this.props.setMovies(result)
          );
          break;
        default:
          fetchPopularMovies().then(result => this.props.setMovies(result));
          return;
      }
    }
  }

  render() {
    console.log("home props: ");
    console.log(this.props);
    return (
      <React.Fragment>
        <Poster />
        <SearchBar />
        <MovieBoard />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ ...state.movies }),
  { setMovies }
)(Home);
