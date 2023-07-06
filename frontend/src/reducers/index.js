import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import movieDetailsReducer from "./movieDetailsReducer";

//combining all the reducers into one
export default combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
});
