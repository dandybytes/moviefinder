export const movie = (state = {}, action) => {
  switch (action.type) {
    case "set_movie_details":
      return { ...action.data };
    default:
      return state;
  }
};
