export const setMovies = data => ({type: "set_movies", data});
export const setFavorites = favorites => ({type: "set_favorites", favorites})
export const setMoviesPopular = movies => ({type: "set_movies_popular", movies});
export const setMoviesByKeyword = movies => ({type: "set_movies_keyword", movies});