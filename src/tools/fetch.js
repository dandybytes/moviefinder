import { url_popular, url_query } from "./url";

export const fetchPopularMovies = pageNum =>
  fetch(`${url_popular}&page=${pageNum || 1}`).then(response =>
    response.json()
  );

export const fetchMoviesByKeyword = (keyword, pageNum) =>
  fetch(`${url_query}&query=${keyword}&page=${pageNum || 1}`).then(response =>
    response.json()
  );
