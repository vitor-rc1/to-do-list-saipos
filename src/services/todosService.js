const { Todo } = require('../models');
const customError = require('../helpers/customError');
const validateInputs = require('../helpers/validateInputs');
const validateEmail = require('../helpers/validateEmail');
const validateAdminPassword = require('../helpers/validateAdminPassword');
const catFactsApi = require('../helpers/catFactsApi');

const idExist = async (id) => {
  const todo = await Todo.findByPk(id);
  if (todo === null) {
    throw new customError({ message: "Task not found" }, 404)
  }
}

const createToDo = async (name,description, email) => {
  validateInputs({ name, description, email });
  await validateEmail(email);
  await Todo.create({ name, description, email });
  return { message: "Successfully created"};
};

const getAllTodos = () => Todo.findAll({ order: ['id']});

const getById = (id) => Todo.findByPk(id);

const updateToDo = async (id, name,description, email) => {
  validateInputs({ name, description, email });
  await idExist(id);
  await validateEmail(email);
  await Todo.update(
    { name, description, email },
    { where: { id } },
  );
  return { message: "Updated successfully"};
};

const deleteToDo = async (id) => {
  await idExist(id);
  await Todo.destroy({ where: { id } });
}

const changeToDoStatus = async (id, adminPassword) => {
  await idExist(id);
  const todo = await getById(id);
  if (!todo.done) {
    todo.done = true;
    todo.changes += 1;
    todo.save();
  } else if (todo.changes < 2 && validateAdminPassword(adminPassword)) {
    todo.done = false;
    todo.save();
  } else {
    throw new customError({ message: "Change limit reached" }, 400)
  }
  return { message: "Updated successfully"};
}

const generateRandomToDos = async () => {
  const todoRandomFacts = await catFactsApi();
  await Todo.bulkCreate(
    todoRandomFacts,
  );
  return { message: "Successfully created"};
}

module.exports = {
  createToDo,
  getAllTodos,
  updateToDo,
  deleteToDo,
  changeToDoStatus,
  generateRandomToDos,
};