import {
    url_popular,
    url_now_playing,
    url_top_rated,
    url_query,
    url_details_start,
    url_details_end
} from "./url";

export const fetchPopularMovies = pageNum =>
    fetch(`${url_popular}&page=${pageNum || 1}`)
        .then(response => response.json())
        .catch(err => console.error("ERROR: fetching popular movies failed: ", err));

export const fetchNowPlayingMovies = pageNum =>
    fetch(`${url_now_playing}&page=${pageNum || 1}`)
        .then(response => response.json())
        .catch(err => console.error("ERROR: fetching now playing movies failed: ", err));

export const fetchTopRatedMovies = pageNum =>
    fetch(`${url_top_rated}&page=${pageNum || 1}`)
        .then(response => response.json())
        .catch(err => console.error("ERROR: fetching top rated movies failed: ", err));

export const fetchMoviesByKeyword = (keyword, pageNum) =>
    fetch(`${url_query}&query=${keyword}&page=${pageNum || 1}`)
        .then(response => response.json())
        .catch(err => console.error("ERROR: movie data fetch failed: ", err));

export const fetchMovieDetails = movieId =>
    fetch(`${url_details_start}${movieId}${url_details_end}`)
        .then(response => response.json())
        .catch(err => console.error("ERROR: movie data fetch failed: ", err));
