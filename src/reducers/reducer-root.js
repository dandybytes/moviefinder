import { combineReducers } from "redux";
import { movies } from "./reducer-movie-list";
import { movie } from "./reducer-movie-details";

export default combineReducers({ movies, movie });
