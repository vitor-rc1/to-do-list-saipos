import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

import { createNewTask } from '../services/Api';
import { setLoading, getAlltodos } from '../actions';

const CreateTaskBar = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState({});

  const dispatch = useDispatch();

  const submitNewTask = async (event) => {
    event.preventDefault();
    
    setMessage({});

    dispatch(setLoading(true));

    const { status, log } = await createNewTask({ name, email, description});
    if (status !== 201) {
      setMessage(log);
    } else {
      dispatch(getAlltodos());
    }

    dispatch(setLoading(false));
  }

  return (
    <div className="create-task-bar-component">
      <form onSubmit={submitNewTask}>
        <label htmlFor="name">
          Name
          <input 
            type="text" 
            id="name" 
            onChange={({target})=> setName(target.value)} 
            required
          />
        </label>
        
        <label htmlFor="email">
          Email
          <input 
            type="email" 
            id="email" 
            onChange={({target})=> setEmail(target.value)} 
            required
          />
        </label>
        
        <label htmlFor="description">
          Description
          <input 
            type="text" 
            id="description" 
            onChange={({target})=> setDescription(target.value)} 
            required
          />
        </label>
        
        <button 
          type="submit" 
          id="create-task"
          className="create-button"
          required 
          >
            Create
          </button>
      </form>
      {
        Object.keys(message).length !== 0 ? 
        Object.entries(message).map(([key, value]) =>(
          <div 
            key={key}
            className="error-message"
          >{key + ' : '+ value}</div>
        )) : 
        ''
      }
    </div>
  );
}

export default CreateTaskBar;