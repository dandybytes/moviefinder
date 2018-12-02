import React from "react";
import { connect } from "react-redux";
import "./Poster.css";
import Spinner from "./Spinner";

const Poster = ({ image, title, description }) => {
  return (
    <section className="poster">
      {!image ? (
        <div className="poster-spinner">
          <Spinner />
        </div>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </section>
  );
};

const mapStateToProps = state => ({ ...state.movies.poster });

export default connect(
  mapStateToProps,
  null
)(Poster);
