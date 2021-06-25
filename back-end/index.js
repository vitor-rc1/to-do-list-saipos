const express = require('express');
const todosRoute = require('./src/routes/todosRoute');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(todosRoute);


app.listen(PORT, () => console.log(`Rodando na ${PORT}`));
