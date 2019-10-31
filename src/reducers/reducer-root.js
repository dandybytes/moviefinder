import {combineReducers} from "redux";
import {movies} from "./reducer-movie-list";
import {movieDetails} from "./reducer-movie-details";
import {poster} from "./reducer-poster";

export default combineReducers({movies, poster, movieDetails});
