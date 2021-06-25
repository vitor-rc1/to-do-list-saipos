import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeTaskStatus, deleteTask } from '../services/Api';
import { setLoading, getAlltodos } from '../actions';

const Todos = ({status}) => {
  const tasks = useSelector(state => state[status]);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  const submitChangeTaskStatus = async (id) => {
    dispatch(setLoading(true));
    let adminPassword = ''
    if (status === 'done') {
      adminPassword = prompt("Digite a senha do Admin")
    }
    const { status: code, log } = await changeTaskStatus(id, adminPassword);

    if (code !== 200) {
      alert(log.message)
    } else {
      dispatch(getAlltodos());
    }

    dispatch(setLoading(false));
  }

  const submitDeleteTask = async (id) => {
    dispatch(setLoading(true));
    await deleteTask(id);
    dispatch(getAlltodos());
    dispatch(setLoading(false));
  }

  if (loading) return '...Carregando';

  return (
    <div className="todo-component">
      <div>
        <Link 
          className={`navigate pending ${status === 'pending'? 'selected': '' }`} 
          to="/pending"
        >
          Pending
        </Link>
        <Link 
          className={`navigate done ${status === 'done'? 'selected': '' }`}
          to="/done"
        >
          Done
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={ index }>
              <td>{ task.id }</td>
              <td>{ task.name }</td>
              <td>{ task.email }</td>
              <td>{ task.description }</td>
              <td>
                <button
                  onClick={() => submitChangeTaskStatus(task.id)}
                  hidden={task.changes>= 2}
                  className={status === 'done'? 'move-button': 'done-button' }
                >
                  {status === 'pending'? 'Done' : 'Move to Pending'}
                </button>
                <button 
                  hidden={status === 'done'}
                  className="delete-button"
                  onClick={() => submitDeleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Todos.propTypes = {
  status: PropTypes.string,
};

export default Todos;