require('dotenv').config();
const fetch = require('node-fetch');

const URL = 'http://apilayer.net/api/check'

module.exports = async (email) => {
  const response = await fetch(`${URL}?access_key=${process.env.ACCESS_KEY}&email=${email}&smtp=1&format=1`);
  return response.json();
}