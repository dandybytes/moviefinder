import React, {useEffect} from "react";
import {connect} from "react-redux";
import MovieBoard from "../MovieBoard";
import {fetchNowPlayingMovies} from "../../tools/fetch";
import {setNowPlayingMovies, setCategory} from "../../actions/actions-movie-list";

const NowPlayingPage = props => {
    // if movie list empty when Now Playing page mounts, fetch current movies
    useEffect(() => {
        setCategory("now-playing");

        if (props.movies.nowPlaying.length === 0) {
            fetchNowPlayingMovies()
                .then(result => props.setNowPlayingMovies(result))
                .catch(err => console.error(err));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="now-playing-movies">
            <MovieBoard category="now-playing" query={null} movieList={props.movies.nowPlaying} />
        </div>
    );
};

export default connect(state => state, {setNowPlayingMovies})(NowPlayingPage); //prettier-ignore
