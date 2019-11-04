export const setMovies = data => ({type: "set_movies", data});
export const setPopularMovies = data => ({type: "set_popular_movies", data});
export const setTopRatedMovies = data => ({type: "set_top_rated_movies", data});
export const setNowPlayingMovies = data => ({type: "set_now_playing_movies", data});
export const setCategory = category => ({type: "set_category", category});
export const setQuery = query => ({type: "set_query", query});
