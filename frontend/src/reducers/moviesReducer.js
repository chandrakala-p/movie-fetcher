///creating reducer for the action fetch movie
const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export default moviesReducer;
