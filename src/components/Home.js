import React, { Component } from "react";
import { connect } from "react-redux";
import Poster from "./Poster";
import SearchBar from "./SearchBar";
import MovieBoard from "./MovieBoard";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
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
  state => state,
  null
)(Home);
