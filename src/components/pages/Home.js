import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPopularMovies, fetchMoviesByKeyword} from "../../tools/fetch";
import {setMovies} from "../../actions/actions-movie-list";
import {setPosterOptions, setCurrentPosterIndex} from "../../actions/actions-poster";
import Poster from "../Poster";
import SearchBar from "../common/SearchBar";
import MovieBoard from "../MovieBoard";
import "./Home.css";

class Home extends Component {
    compilePosterOptions = () =>
        this.props.movies.movieList.filter(
            movie => movie.backdrop_path && movie.title && movie.overview
        );

    fetchMovies = () => {
        if (this.props.movies.query) {
            fetchMoviesByKeyword(this.props.movies.query)
                .then(result => this.props.setMovies(result))
                .then(() => this.props.setPosterOptions(this.compilePosterOptions()));
        } else {
            fetchPopularMovies()
                .then(result => this.props.setMovies(result))
                .then(() => this.props.setPosterOptions(this.compilePosterOptions()));
        }
    };

    componentDidMount() {
        if (this.props.movies.movieList.length === 0) {
            this.fetchMovies();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.movies.category !== this.props.movies.category ||
            prevProps.movies.query !== this.props.movies.query
        ) {
            this.fetchMovies();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Poster />
                <SearchBar />
                <MovieBoard />
            </React.Fragment>
        );
    }
}

export default connect(
    state => state,
    {setMovies, setPosterOptions, setCurrentPosterIndex}
)(Home);
