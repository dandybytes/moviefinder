import React, {useState, useRef, useEffect} from "react";
import {connect} from "react-redux";
import {setQuery} from "../../actions/actions-movie-list";
import "./SearchBar.css";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";

const SearchBar = ({storeQuery, setStoreQuery}) => {
    const [inputQuery, setInputQuery] = useState("");
    const timeoutRef = useRef(null);
    const searchInputRef = useRef(null);

    const handleSearchInput = event => setInputQuery(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        setStoreQuery(inputQuery.trim());
    };

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setStoreQuery(inputQuery), 350);

        return () => clearTimeout(timeoutRef.current);
    }, [inputQuery, setStoreQuery]);

    useEffect(() => {
        searchInputRef.current.focus();
        if (inputQuery === "" && storeQuery !== "") setInputQuery(storeQuery);
        // eslint-disable-next-line
    }, []);

    return (
        <form className="searchbar-form" onSubmit={handleSubmit}>
            <label className="searchbar-label">
                <input
                    type="search"
                    className="searchbar-input"
                    placeholder="movie title..."
                    value={inputQuery}
                    onChange={handleSearchInput}
                    ref={searchInputRef}
                />
                <MagnifyingGlassIcon />
            </label>
        </form>
    );
};

const mapStateToProps = state => ({storeQuery: state.movies.query});

export default connect(mapStateToProps, {setStoreQuery: setQuery})(SearchBar);
