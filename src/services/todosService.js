const joi = require('joi');
const { Todo } = require('../models');
const customError = require('../helpers/customError');
const validateEmail = require('../helpers/mailBoxLayerAPI');

const schemaTodo = joi.object({
  name: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  email: joi.string().required(),
});

const validateInputs = (inputs) => {
  const { error } = schemaTodo.validate(inputs);
  if (error) {
    const { details: [{ message }] } = error;
    throw new customError(message, 400);
  }
};

const isEmailValid = async (email) => {
  const { error, did_you_mean } = await validateEmail(email);
  console.log(error, did_you_mean);
  if (error) {
    const { code, type, info } = error;
    throw new customError({ message: { type, info }}, code);
  }
  if (did_you_mean){
    throw new customError({ message: "Invalid email", did_you_mean }, 401);
  }
};

const createToDo = async (name,description, email) => {
  validateInputs({ name,description, email });
  await isEmailValid(email);
  await Todo.create({ name, description, email });
  return { message: "Successfully created"};
};

module.exports = {
  createToDo,
};