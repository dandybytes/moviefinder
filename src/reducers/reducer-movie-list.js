export const movies = (
    state = {
        category: "popular",
        query: "",
        movieList: [],
        popular: [],
        topRated: [],
        nowPlaying: []
    },
    action
) => {
    switch (action.type) {
        case "set_movies":
            return {
                ...state,
                movieList: action.data.results,
                page: action.data.page,
                pages: action.data.total_pages
            };
        case "set_popular_movies":
            return {
                ...state,
                popular: action.data.results,
                page: action.data.page,
                pages: action.data.total_pages
            };
        case "set_top_rated_movies":
            return {
                ...state,
                topRated: action.data.results,
                page: action.data.page,
                pages: action.data.total_pages
            };
        case "set_now_playing_movies":
            return {
                ...state,
                nowPlaying: action.data.results,
                page: action.data.page,
                pages: action.data.total_pages
            };
        case "set_category":
            return {...state, category: action.category};
        case "set_query":
            return {...state, query: action.query};
        default:
            return state;
    }
};
