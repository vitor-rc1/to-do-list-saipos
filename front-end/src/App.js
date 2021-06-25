import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './Routes';
import { getAlltodos } from './actions'

import './App.css';

const  App = () => {
  const dispatch = useDispatch();
  useEffect(async () =>{
    dispatch(getAlltodos(true));
  }, [])

  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
