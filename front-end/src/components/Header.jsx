import React from 'react';
import { useDispatch } from 'react-redux';

import { randomTasks } from '../services/Api';
import { setLoading, getAlltodos } from '../actions';
import {ReactComponent as LogoSaipos} from '../images/logoSaipos.svg';

const Header = () => {
  const dispatch = useDispatch();


  const submitNewRandomTaks = async () => {
    dispatch(setLoading(true));
    await randomTasks();
    dispatch(getAlltodos());
    dispatch(setLoading(false));
  }
  return (
    <div className="header-component">
      <LogoSaipos  class="logo"/>
      <h1>To Do List</h1>
      <button type="button" onClick={submitNewRandomTaks}>I m out of tasks</button>
    </div>
  )
}

export default Header;