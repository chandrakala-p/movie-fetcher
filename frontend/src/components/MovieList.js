import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./actions/index";
import "./MovieList.css";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <ul className="movie-list">
        <li className="heading">List of Movies</li>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
