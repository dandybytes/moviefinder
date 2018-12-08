export const movie = (state = {}, action) => {
  switch (action.type) {
    case "set_movie_details":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
