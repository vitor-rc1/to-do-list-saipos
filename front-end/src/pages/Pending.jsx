import React from 'react';
import Todos from '../components/Todos';
import Header from '../components/Header';
import CreateTaskBar from '../components/CreateTaskBar';

const Pending = () => {
  return (
    <div>
      <Header />
      <CreateTaskBar />
      <Todos status="pending" />
    </div>
  )
}

export default Pending;