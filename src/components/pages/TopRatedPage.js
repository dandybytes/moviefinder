import React, {useEffect} from "react";
import {connect} from "react-redux";
import MovieBoard from "../MovieBoard";
import {fetchTopRatedMovies} from "../../tools/fetch";
import {setTopRatedMovies, setCategory} from "../../actions/actions-movie-list";

const TopRatedPage = props => {
    // if movie list empty when Top Rated page mounts, fetch top-rated movies
    useEffect(() => {
        setCategory("top-rated");

        if (props.movies.topRated.length === 0) {
            fetchTopRatedMovies()
                .then(result => props.setTopRatedMovies(result))
                .catch(err => console.error(err));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="top-rated-movies">
            <MovieBoard category="top-rated" query={null} movieList={props.movies.topRated} />
        </div>
    );
};

export default connect(state => state, {setTopRatedMovies})(TopRatedPage); //prettier-ignore
