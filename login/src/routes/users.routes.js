// src/routes/users.routes.js
const { Router } = require('express');
const UsersController = require('../controllers/user.control');

const router = Router();

router.get('/', UsersController.list);
router.get('/:id', UsersController.getById);
router.post('/', UsersController.create);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.remove);

module.exports = router;
