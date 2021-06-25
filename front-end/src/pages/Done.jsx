import React from 'react';
import Todos from '../components/Todos';
import Header from '../components/Header';
import CreateTaskBar from '../components/CreateTaskBar';

const Done = () => {
  return (
    <div>
      <Header />
      <CreateTaskBar />
      <Todos status="done" />
    </div>
  )
}

export default Done;