import dotenv from 'dotenv';
dotenv.config()

const URL = process.env.REACT_APP_API;

export const getAllTodos = async () => {
  const response = await fetch(`${URL}/todo`);
  return response.json();
}