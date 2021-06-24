const todosService = require('../services/todosService');

const createToDo = async (req, res) => {
  try {
    const { name,description, email } = req.body;
    const newToDo = await todosService.createToDo(name, description, email);
    res.status(201).json(newToDo);
  } catch (error) {
    const { message, code } = error;
    if (code) {
      return res.status(code).json({
        ...message,
      });
    }
    return res.status(500).json({
      message,
    });
  }
};

module.exports = {
  createToDo,
};