const joi = require('joi');
const customError = require('./customError');

const schemaTodo = joi.object({
  name: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  email: joi.string().required(),
});

module.exports = (inputs) => {
  const { error } = schemaTodo.validate(inputs);
  if (error) {
    const { details: [{ message }] } = error;
    throw new customError({ message }, 400);
  }
};