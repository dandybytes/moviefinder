import React from "react";
import { connect } from "react-redux";
import "./Poster.css";

const Poster = ({ image, title, description }) => (
  <section className="poster">
    <div className="spinner-large" />
    <div
      className="poster-image"
      style={{
        backgroundImage: `linear-gradient(var(--color-1), transparent 20%), url("${image}")`
      }}
    />
    <div className="poster-text">
      <h1 className="poster-title">{title}</h1>
      <p className="poster-description">{description}</p>
    </div>
  </section>
);

const mapStateToProps = state => ({ ...state.movies.poster });

export default connect(
  mapStateToProps,
  null
)(Poster);
