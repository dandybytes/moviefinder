import React, {useEffect} from "react";
import {connect} from "react-redux";
import MovieBoard from "../MovieBoard";
import {fetchPopularMovies} from "../../tools/fetch";
import {setPopularMovies, setCategory} from "../../actions/actions-movie-list";

const PopularPage = props => {
    // if movie list empty when Popular page mounts, fetch popular movies
    useEffect(() => {
        setCategory("popular");

        if (props.movies.popular.length === 0) {
            fetchPopularMovies()
                .then(result => props.setPopularMovies(result))
                .catch(err => console.error(err));
        }
    }, []);

    return (
        <div className="popular-movies">
            <MovieBoard category="popular" query={null} movieList={props.movies.popular} />
        </div>
    );
};

export default connect(state => state, {setPopularMovies})(PopularPage); //prettier-ignore
