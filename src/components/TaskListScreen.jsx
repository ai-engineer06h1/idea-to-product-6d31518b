import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('http://localhost:5000/tasks');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.text} - {task.completed ? 'Completed' : 'Pending'}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListScreen;
