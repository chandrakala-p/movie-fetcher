import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
  const response = await axios.get("/api/movies");
  dispatch({ type: "FETCH_MOVIES", payload: response.data });
};

export const fetchMovieDetails = (id) => async (dispatch, getState) => {
  const { movieDetails } = getState();
  if (movieDetails && movieDetails._id === id) {
    return;
  }
  const response = await axios.get(`/api/movies/${id}`);
  dispatch({ type: "FETCH_MOVIE_DETAILS", payload: response.data });
};
