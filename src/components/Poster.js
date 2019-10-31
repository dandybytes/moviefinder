import React from "react";
import {connect} from "react-redux";
import "./Poster.css";
import Spinner from "./common/Spinner";
import {url_img_backdrop} from "../tools/url";

const Poster = movie => {
    const image = `${url_img_backdrop}${movie.backdrop_path}`;
    const title = movie.title;
    const description = movie.overview;

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
                            backgroundImage: `linear-gradient(var(--color-1) 0%, transparent 40%, transparent 60%, var(--color-1) 100%), url("${image}")`
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

const mapStateToProps = state => {
    const {posterOptions, currentPosterIndex} = state.poster;
    return posterOptions[currentPosterIndex];
};

export default connect(mapStateToProps, null)(Poster); //prettier-ignore
