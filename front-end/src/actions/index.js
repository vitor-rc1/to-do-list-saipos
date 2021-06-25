import { getAllTodos } from '../services/Api';

export const LOADING = 'LOADING'
export const SET_TODOS = 'SET_TODOS'

export const setLoading = (value) => ({
  type: LOADING,
  value,
})

export const setTodos = (value) => ({
  type: SET_TODOS,
  value
});

export const getAlltodos = () => async (dispatch) => {
  dispatch(setLoading(true));
  const todos = await getAllTodos();
  console.log(todos);
  dispatch(setTodos(todos));
  dispatch(setLoading(false));
};