// app.js
const express = require("express");
const cors = require("cors");
const movies = require("./moviesData.js");

const app = express();

app.use(cors());

//creating the get api for fetching all the movies list
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

//creating the get api for fetching all the details about the particular  movie
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) {
    res.status(404).send("Movie not found");
  } else {
    res.json(movie);
  }
});

//app is running on the port 5000
app.listen(5000, () =>
  console.log("Server is running on port 5000  :   http://localhost:5000/")
);
