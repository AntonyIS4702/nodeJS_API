// src/controllers/users.controller.js
const UsersService = require('../services/user.services');

module.exports = {
  async list(req, res, next) {
    try {
      const users = await UsersService.list();
      res.json(users);
    } catch (err) { next(err); }
  },
  async getById(req, res, next) {
    try {
      const user = await UsersService.getById(req.params.id);
      if (!user) return res.status(404).json({ message: 'Not found' });
      res.json(user);
    } catch (err) { next(err); }
  },
  async create(req, res, next) {
    try {
      const user = await UsersService.create(req.body);
      res.status(201).json(user);
    } catch (err) { next(err); }
  },
  async update(req, res, next) {
    try {
      const user = await UsersService.update(req.params.id, req.body);
      res.json(user);
    } catch (err) { next(err); }
  },
  async remove(req, res, next) {
    try {
      await UsersService.remove(req.params.id);
      res.status(204).end();
    } catch (err) { next(err); }
  },
};
