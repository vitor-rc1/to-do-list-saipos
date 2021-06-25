import {
  LOADING,
  SET_TODOS,
} from '../actions'

const INITIAL_STATE = {
  pending: [],
  done: [],
  loading: true,
}

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.value }
    case SET_TODOS:
      return {
        ...state,
        pending: action.value.filter(todo => todo.done === false),
        done: action.value.filter(todo => todo.done === true),
      }
    default: 
      return { ...state }
  }
};

export default todos;