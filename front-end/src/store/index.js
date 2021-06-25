import { createStore } from 'redux';
import todos from '../reducers'

const store = createStore(todos);

export default store;