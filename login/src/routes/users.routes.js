// src/routes/users.routes.js
const { Router } = require('express');
const UsersController = require('../controllers/user.control');

const router = Router();

// Static list
const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 }
];

// Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    data: movies
  });
});

router.get('/movies', UsersController.getMovies);
// router.get('/:id', UsersController.getById);
// router.post('/', UsersController.create);
// router.put('/:id', UsersController.update);
// router.delete('/:id', UsersController.remove);

module.exports = router;







