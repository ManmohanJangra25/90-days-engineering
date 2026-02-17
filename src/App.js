import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const addTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: newTask,
        isCompleted: false,
        createdAt: Date.now(),
      },
    ]);
  };

  const removeTask = (idToRemove) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => task.id !== idToRemove);
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <div className="task_wrapper">
        <div className="task_box">
          <TaskInput onAddTask={addTask} />
          <TaskList tasks={tasks} removeTasks={removeTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
