import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <section className="searchbar-wrapper">
      <div className="searchbar">
        <i className="fas fa-search searchbar-icon" />
        <input type="text" className="searchbar-input" />
      </div>
    </section>
  );
};

export default SearchBar;
