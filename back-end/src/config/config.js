require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: 'todo_list',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: 'todo_list',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: 'todo_list',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
};