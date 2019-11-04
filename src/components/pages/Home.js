import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPopularMovies, fetchMoviesByKeyword} from "../../tools/fetch";
import {setMovies} from "../../actions/actions-movie-list";
import {setPosterOptions, setCurrentPosterIndex} from "../../actions/actions-poster";
import Poster from "../Poster";
import SearchBar from "../common/SearchBar";
import MovieBoard from "../MovieBoard";
import "./Home.css";

const Home = props => {
    // filter out movie objects that miss the image, title or description info
    const validatePosterOptions = movieList =>
        movieList
            ? movieList.filter(movie => movie.backdrop_path && movie.title && movie.overview)
            : [];

    const fetchMovies = () => {
        // fetch movies that match user-input keywords
        if (props.movies.query) {
            fetchMoviesByKeyword(props.movies.query)
                .then(result => props.setMovies(result))
                .catch(err => console.error(err));
            // if no user input, default to popular movies
        } else {
            fetchPopularMovies()
                .then(result => props.setMovies(result))
                .catch(err => console.error(err));
        }
    };

    // if movie list empty when home page mounts, fetch movies
    useEffect(() => {
        if (props.movies.movieList.length === 0) fetchMovies();
    }, []);

    // refresh movie list every time the user-input query or category changes
    useEffect(() => {
        fetchMovies();
    }, [props.movies.category, props.movies.query]);

    // validate every refreshed movie list for poster options
    useEffect(() => {
        props.setPosterOptions(validatePosterOptions(props.movies.movieList));
    }, [props.movies.movieList]);

    return (
        <React.Fragment>
            <Poster />
            <SearchBar />
            <MovieBoard
                category="popular"
                query={props.movies.query}
                movieList={props.movies.movieList}
            />
        </React.Fragment>
    );
};

export default connect(
    state => state,
    {setMovies, setPosterOptions, setCurrentPosterIndex}
)(Home);
