// movieService.js
const connectDB = require("../modal/db");

async function getMovies(limit = 10) {
  const db = await connectDB();
  const movies = db.collection("movies");
  return movies.find().limit(limit).toArray();
}

module.exports = { getMovies };
