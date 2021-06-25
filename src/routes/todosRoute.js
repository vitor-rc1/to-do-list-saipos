const express = require('express');
const todosController = require('../controllers/todosController');

const router = express.Router();

router
  .route('/todo')
  .post(todosController.createToDo)
  .get(todosController.getAllTodos);

router
.route('/todo/:id')
.post(todosController.changeToDoStatus)
.put(todosController.updateToDo)
.delete(todosController.deleteToDo);

module.exports = router;