import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskListScreen from './TaskListScreen';
import AddTaskScreen from './AddTaskScreen';

function LandingScreen() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={TaskListScreen} />
        <Route path="/add" component={AddTaskScreen} />
      </div>
    </Router>
  );
}

export default LandingScreen;
