import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Routes from './Routes';

import { getAllTodos } from './services/Api'
import { setLoading } from './actions'

import './App.css';

function App() {
  const dispatch = useDispatch();
  const todosState = useSelector(state => state.pending);

  useEffect(async () =>{
    console.log(todosState);
    dispatch(setLoading(true));
    const todos = await getAllTodos();
    console.log(todos);

  }, [])
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
