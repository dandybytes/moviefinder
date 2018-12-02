export const movies = (
  state = { category: "popular", query: "", movies: [] },
  action
) => {
  switch (action.type) {
    case "set_movies":
      const { results, page, total_pages } = action.data;
      return { ...state, movies: results, page, pages: total_pages };
    case "set_category":
      return { ...state, category: action.category };
    case "set_query":
      return { ...state, query: action.query };
    default:
      return state;
  }
};
