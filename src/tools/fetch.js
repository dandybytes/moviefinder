import { url_popular, url_query, url_details_start, url_details_end } from "./url";

export const fetchPopularMovies = pageNum =>
  fetch(`${url_popular}&page=${pageNum || 1}`)
    .then(response => response.json());

export const fetchMoviesByKeyword = (keyword, pageNum) =>
  fetch(`${url_query}&query=${keyword}&page=${pageNum || 1}`)
    .then(response => response.json());

export const fetchMovieDetails = movieId =>
  fetch(`${url_details_start}${movieId}${url_details_end}`)
    .then(response => response.json());