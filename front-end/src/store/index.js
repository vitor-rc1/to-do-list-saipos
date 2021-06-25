import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todos from '../reducers'

const store = createStore(todos, applyMiddleware(thunk));

export default store;