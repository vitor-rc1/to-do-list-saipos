const fetch = require('node-fetch');

const URL = 'https://cat-fact.herokuapp.com/facts';

module.exports = async () => {
  const response = await fetch(URL);
  const facts = await response.json();

  const toDoFacts = facts
    .filter((_fact, index) => index <= 2)
    .map((fact) => ({
      name: 'Eu',
      description: fact.text,
      email: 'eu@me.com',
    }));
  return toDoFacts;
}