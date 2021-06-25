import { LOADING } from '../actions'

const INITIAL_STATE = {
  pending: [],
  done: [],
  loading: true,
}

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.value }
    default: 
      return { ...state }
  }
};

export default todos;