export const movies = (state = {}, action) => {
  switch (action.type) {
    case "set_movies":
      const {results, page, total_pages} = action.data;
      return {...state, movies: results, page, pages: total_pages};
    case "set_favorites":
      return {...state, favorites: action.favorites};
    default:
      return state;
  }
};
