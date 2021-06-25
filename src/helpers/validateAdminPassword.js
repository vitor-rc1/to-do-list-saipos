require('dotenv').config();
const customError = require('./customError');


module.exports = (adminPassword) => {
  const PASSWORD = process.env.ADMIN_PASSWORD;
  if (adminPassword === PASSWORD) return true

  throw new customError({ message: "Invalid admin password" }, 401);

}