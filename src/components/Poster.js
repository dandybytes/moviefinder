import React, {useState, useEffect, useRef} from "react";
import {connect} from "react-redux";
import "./Poster.css";
import Spinner from "./common/Spinner";
import {url_img_backdrop, url_img_poster} from "../tools/url";
import {setCurrentPosterIndex} from "../actions/actions-poster";

const Poster = props => {
    const posterImgRef = useRef(null);

    let [fade, setFade] = useState(true);
    let [image, setImage] = useState(null);
    let [title, setTitle] = useState(null);
    let [description, setDescription] = useState(null);

    const {posterOptions, currentPosterIndex} = props.poster;

    useEffect(() => {
        let timeout;
        if (posterOptions.length > 0 && currentPosterIndex !== null) {
            const movie = posterOptions[currentPosterIndex];
            if (window.innerWidth > 600) {
                setImage(`${url_img_backdrop}${movie.backdrop_path}`);
            } else {
                setImage(`${url_img_poster}${movie.poster_path}`);
            }
            setTitle(movie.title);
            setDescription(movie.overview);
            timeout = setTimeout(() => {
                if (fade) {
                    posterImgRef.current.classList.remove("fade");
                    setFade(false);
                } else {
                    posterImgRef.current.classList.add("fade");
                    setFade(true);
                }
            }, 7000);
        }
        return () => clearTimeout(timeout);
    }, [currentPosterIndex, posterOptions, fade, window.innerWidth]);

    // whenever 'fade' class removed from poster image, increment poster image index by 1
    useEffect(() => {
        if (!fade)
            props.setCurrentPosterIndex(
                currentPosterIndex < posterOptions.length - 1 ? currentPosterIndex + 1 : 0
            );
    }, [fade]);

    return (
        <section className="poster">
            {!image || !title || !description ? (
                <div className="poster-spinner">
                    <Spinner />
                </div>
            ) : (
                <div
                    ref={posterImgRef}
                    className="poster-image"
                    style={{
                        backgroundImage: `linear-gradient(var(--color-1) 0%, transparent 40%, transparent 60%, var(--color-1) 100%), url("${image}")`
                    }}
                >
                    <div className="poster-text">
                        <h1 className="poster-title">{title}</h1>
                        <p className="poster-description">{description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

const mapDispatchToProps = dispatch => dispatch;
export default connect(state => state, {setCurrentPosterIndex})(Poster); //prettier-ignore
