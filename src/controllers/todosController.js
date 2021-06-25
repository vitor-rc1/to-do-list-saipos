const todosService = require('../services/todosService');

const createToDo = async (req, res) => {
  try {
    const { name,description, email } = req.body;
    const newToDo = await todosService.createToDo(name, description, email);
    res.status(201).json(newToDo);
  } catch (error) {
    const { message, code } = error;
    if (code) {
      return res.status(code).json(message);
    }
    return res.status(500).json({
      message,
    });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await todosService.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    const { message, code } = error;
    if (code) {
      return res.status(code).json(message);
    }
    return res.status(500).json({
      message,
    });
  }
};

const updateToDo = async (req, res) => {
  try {
    const { name,description, email } = req.body;
    const { id } = req.params;
    const updatedToDo = await todosService.updateToDo(id, name, description, email);
    res.status(200).json(updatedToDo);
  } catch (error) {
    const { message, code } = error;
    if (code) {
      return res.status(code).json(message);
    }
    return res.status(500).json({
      message,
    });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    await todosService.deleteToDo(id);
    res.status(204).json();
  } catch (error) {
    const { message, code } = error;
    if (code) {
      return res.status(code).json(message);
    }
    return res.status(500).json({
      message,
    });
  }
};

const changeToDoStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { adminPassword } = req.body;

    const changedToDoStatus = await todosService.changeToDoStatus(id, adminPassword);
    res.status(200).json(changedToDoStatus);
  } catch (error) {
    const { message, code } = error;
    if (code) {
      return res.status(code).json(message);
    }
    return res.status(500).json({
      message,
    });
  }
};

module.exports = {
  createToDo,
  getAllTodos,
  updateToDo,
  deleteToDo,
  changeToDoStatus
};