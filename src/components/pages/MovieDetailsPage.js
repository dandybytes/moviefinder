import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovieDetails} from "../../tools/fetch";
import {setMovieDetails} from "../../actions/actions-movie-details";
import MovieDetailsCore from "../MovieDetailsCore";
import Spinner from "../common/Spinner";
import "./MovieDetailsPage.css";

const MovieDetailsPage = props => {
    useEffect(() => {
        fetchMovieDetails(props.match.params.movieId).then(result => props.setMovieDetails(result));
        // eslint-disable-next-line
    }, []);

    return (
        <div className="movie-details-page">
            {/* {props.movieDetails.status_code && <h1>movie cannot be found</h1>} */}
            {props.movieDetails.id ? (
                <React.Fragment>
                    <MovieDetailsCore movie={props.movieDetails} />
                </React.Fragment>
            ) : props.movieDetails.status_code ? (
                <h1 style={{color: "red"}}>movie cannot be found</h1>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default connect(state => state, {setMovieDetails})(MovieDetailsPage); //prettier-ignore
