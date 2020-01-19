import React, {useState, useRef} from "react";
import {connect} from "react-redux";
import {setQuery} from "../../actions/actions-movie-list";
import "./SearchBar.css";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";

const SearchBar = ({setQuery}) => {
    const [userEnteredQuery, setUserEnteredQuery] = useState("");
    const timeout = useRef();

    const handleSearchInput = event => {
        setUserEnteredQuery(event.target.value);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setQuery(userEnteredQuery), 500);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setQuery(userEnteredQuery.trim());
    };

    return (
        <form className="searchbar-form" onSubmit={handleSubmit}>
            <label className="searchbar-label">
                <input
                    type="search"
                    className="searchbar-input"
                    placeholder="movie title..."
                    value={userEnteredQuery}
                    onChange={handleSearchInput}
                />
                <MagnifyingGlassIcon />
            </label>
        </form>
    );
};

export default connect(null, {setQuery})(SearchBar);
