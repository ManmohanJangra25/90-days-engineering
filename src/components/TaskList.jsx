import React from "react";
import { useState } from 'react';

const TaskList = ({ tasks, removeTasks }) => {

    const [completion, setCompletion] = useState(false);

    return (
        <div className="task_list">
            {tasks.length === 0 ? (
                <p>No Task Yet</p>
            ) : (
                tasks.map((task, index) => {
                    return (
                        <p key={index} className="task">{task.text}
                        <span className="buttons">
                            <button onClick={(e) => {setCompletion(true)}} className={`complete_button ${completion}`}>{completion ? "Task Completed" : "Complete Task"}</button>
                            <button onClick={(e) => {removeTasks(task.id)}}>Delete</button>
                        </span>
                        </p>
                    )
                })
            )}
        </div>
    );
};

export default TaskList;