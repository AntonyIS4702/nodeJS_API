// movieService.js
const connectDB = require("../modal/db");

async function listMovies() {
  const db = await connectDB();
  return db.collection("movies").find({}).toArray();
}

module.exports = { listMovies };


