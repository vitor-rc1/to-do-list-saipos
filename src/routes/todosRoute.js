const express = require('express');
const todosController = require('../controllers/todosController');

const router = express.Router();

router
  .route('/todo')
  .post(todosController.createToDo);

module.exports = router;