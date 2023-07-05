const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: String,
    genre: String,
    imdb: String
    // Add other fields as necessary
});

module.exports = mongoose.model('Movie', MovieSchema);