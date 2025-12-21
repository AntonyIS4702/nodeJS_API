// movieService.js
const connectDB = require("../modal/db");

async function listMovies() {
  const db = await connectDB();
  return db.collection("movies").find({}).sort({ "imdb.rating": -1 }).limit(4).toArray();
}

module.exports = { listMovies };


