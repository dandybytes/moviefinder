import React, { Component } from "react";
import {connect} from "react-redux";
import "./SearchBar.css";
import { fetchPopularMovies, fetchMoviesByKeyword } from "./../tools/fetch";
import {setMovies, setFavorites} from "../actions/actions-movie-list";

class SearchBar extends Component {
  state = { query: "" };

  componentDidMount() {
    const {query} = this.state.query;
    (query ? fetchMoviesByKeyword(query) : fetchPopularMovies())
    .then(result => this.props.setMovies(result));
    // if (this.state.query) {
    //   fetchMoviesByKeyword(this.state.query).then(result => {console.log(result); setMovies(result);});
    // } else {
    //   fetchPopularMovies().then(result => {console.log("setting popular movies from search bar"); this.props.setMovies(result);});
    // }
  }

  render() {
    // console.log("search bar state: ");
    // console.log(this.state);
    return (
      <section className="searchbar-wrapper">
        <div className="searchbar">
          <i className="fas fa-search searchbar-icon" />
          <input
            type="text"
            className="searchbar-input"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </div>
      </section>
    );
  }
}

// const mapDispatchToProps = dispatch => ({setMovies});

export default connect(null, {setMovies, setFavorites})(SearchBar);
