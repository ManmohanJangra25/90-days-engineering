import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  }

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((_, index) => index !== indexToRemove)
    });
  }

  return (
    <div className="App">
      <Header/>
      <div className='task_wrapper'>
        <div className='task_box'>
          <TaskInput onAddTask={addTask}/>
          <TaskList tasks={tasks} removeTasks={removeTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
