import React, {Component} from "react";
import {connect} from "react-redux";
import {setCategory, setQuery} from "../../actions/actions-movie-list";
import "./SearchBar.css";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";

class SearchBar extends Component {
    state = {query: ""};

    timeout;

    handleSearchInput = event => {
        const query = event.target.value.trim();
        this.setState({query});
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.props.setQuery(this.state.query), 700);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.setQuery(this.state.query);
    };

    render() {
        return (
            <form className="searchbar-form" onSubmit={this.handleSubmit}>
                <label className="searchbar-label">
                    <input
                        type="search"
                        className="searchbar-input"
                        placeholder="movie title..."
                        value={this.state.query}
                        onChange={this.handleSearchInput}
                    />
                    <MagnifyingGlassIcon />
                </label>
            </form>
        );
    }
}

export default connect(null, {setCategory, setQuery})(SearchBar); //prettier-ignore
