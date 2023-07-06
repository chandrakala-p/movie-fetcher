import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails } from "./actions/index";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>Rating: {movie.rating}</p>
        <p>Director: {movie.director}</p>
        <p>Genre: {movie.genre}</p>
        <p>Release Year: {movie.year}</p>
      </div>
  );
};

export default MovieDetails;
