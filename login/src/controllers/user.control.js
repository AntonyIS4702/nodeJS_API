// src/controllers/users.controller.js
const UsersService = require('../services/user.services');

module.exports = {
  async listMovie(req, res, next) {
    try {
      const movies = await UsersService.getMovies();
      res.json(movies);
    } catch (err) { next(err); }
  },
 
};
