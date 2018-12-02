import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchBar.css";
import { setCategory, setQuery } from "../actions/actions-movie-list";

class SearchBar extends Component {
  state = { query: "" };

  timeout;

  handleSearchInput = event => {
    this.setState({ query: event.target.value.trim() });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log("timeout activated");
      const query = this.state.query;
      if (query) {
        this.props.setCategory("query");
        this.props.setQuery(this.state.query);
      } else {
        this.props.setCategory("popular");
      }
    }, 500);
  };

  render() {
    console.log("search bar state: ");
    console.log(this.state);
    // console.log("search bar props: ");
    // console.log(this.props);
    return (
      <section className="searchbar-wrapper">
        <div className="searchbar">
          <i className="fas fa-search searchbar-icon" />
          <input
            type="text"
            className="searchbar-input"
            value={this.state.query}
            onChange={this.handleSearchInput}
          />
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { setCategory, setQuery }
)(SearchBar);
