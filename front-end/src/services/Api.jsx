import dotenv from 'dotenv';
dotenv.config()

const URL = process.env.REACT_APP_API;

export const getAllTodos = async () => {
  const response = await fetch(`${URL}/todo`);
  return response.json();
}

export const randomTasks = async () => {
  const response = await fetch(`${URL}/todo/random`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const log = await response.json();
  return {
    status: response.status,
    log,
  }
}

export const createNewTask = async (newTask) => {
  const response = await fetch(`${URL}/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  });
  
  const log = await response.json();
  return {
    status: response.status,
    log,
  }
  
}

export const changeTaskStatus = async (id, adminPassword) => {
  const response = await fetch(`${URL}/todo/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ adminPassword }),
  });
  
  const log = await response.json();
  return {
    status: response.status,
    log,
  }
}

export const deleteTask = async (id) => {
  const response = await fetch(`${URL}/todo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const log = await response.json();
  return {
    status: response.status,
    log,
  }
}