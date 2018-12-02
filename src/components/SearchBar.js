import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchBar.css";
import { setCategory, setQuery } from "../actions/actions-movie-list";

class SearchBar extends Component {
  state = { query: "" };

  timeout;

  handleSearchInput = event => {
    const query = event.target.value.trim();
    query && this.setState({ query });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.props.setQuery(this.state.query), 700);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setQuery(this.state.query);
  };

  render() {
    console.log("search bar state: ");
    console.log(this.state);
    return (
      <form className="searchbar-form" onSubmit={this.handleSubmit}>
        <label className="searchbar">
          <i className="fas fa-search searchbar-icon" />
          <input
            type="text"
            className="searchbar-input"
            value={this.state.query}
            onChange={this.handleSearchInput}
          />
        </label>
      </form>
    );
  }
}

export default connect(
  null,
  { setCategory, setQuery }
)(SearchBar);
