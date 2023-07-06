//creating the reducer for the action fetch movie details 
const movieDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default movieDetailsReducer;
