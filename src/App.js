import './App.css';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, {
      id: Math.random(),
      text: newTask,
      isCompleted: false,
      createdAt: Date.now()
    }]);
  }

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => task.id !== indexToRemove);
    });
  };

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
