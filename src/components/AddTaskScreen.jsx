import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddTaskScreen = () => {
  const [text, setText] = useState('');
  const history = useHistory();

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/tasks', { text });
    history.push('/');
  };

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={addTask}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTaskScreen;
