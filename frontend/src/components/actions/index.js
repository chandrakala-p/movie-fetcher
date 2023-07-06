import axios from "axios";


//creating an action functions


//function to fetch all the movies list
export const fetchMovies = () => async (dispatch) => {
  const response = await axios.get("/api/movies");
  dispatch({ type: "FETCH_MOVIES", payload: response.data });
};


//function to fetch all the details of a particular movie
export const fetchMovieDetails = (id) => async (dispatch, getState) => {
  const { movieDetails } = getState();
  if (movieDetails && movieDetails._id === id) {
    return;
  }
  //with the help of axios, we are accessing the endpoibts from the server 
  const response = await axios.get(`/api/movies/${id}`);
  dispatch({ type: "FETCH_MOVIE_DETAILS", payload: response.data });
};
