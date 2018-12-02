import React, { Component } from "react";
import { connect } from "react-redux";
import { url_img_backdrop } from "../tools/url";
import { fetchPopularMovies, fetchMoviesByKeyword } from "./../tools/fetch";
import { setMovies, setPoster } from "../actions/actions-movie-list";
import Poster from "./Poster";
import SearchBar from "./SearchBar";
import MovieBoard from "./MovieBoard";
import "./Home.css";

class Home extends Component {
  compilePoster = () => {
    const movies = this.props.movies;
    if (movies.length > 0) {
      const randIndex = Math.floor(Math.random() * movies.length);
      const movie = movies[randIndex];
      const backdrop = movie.backdrop_path;
      const image = `${url_img_backdrop}${backdrop}`;
      const title = movie.title;
      const description = movie.overview;
      return { image, title, description };
    }
  };

  componentDidMount() {
    if (this.props.movies.length === 0) {
      switch (this.props.category) {
        case "query":
          fetchMoviesByKeyword(this.props.query).then(result =>
            this.props.setMovies(result)
          );
          break;
        default:
          fetchPopularMovies()
            .then(result => this.props.setMovies(result))
            .then(() => this.props.setPoster(this.compilePoster()));
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
  { setMovies, setPoster }
)(Home);
