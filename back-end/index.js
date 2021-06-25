const express = require('express');
const cors = require('cors')
const todosRoute = require('./src/routes/todosRoute');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(todosRoute);


app.listen(PORT, () => console.log(`Rodando na ${PORT}`));
