// src/controllers/users.controller.js
const UsersService = require('../services/user.services');

 async function getMovies(req, res) {
  try {
    const movies = await UsersService.listMovies();
    res.status(200).json({ success: true, data: movies });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
module.exports = { getMovies };
