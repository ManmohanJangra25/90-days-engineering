import React from "react";

const TaskList = ({ tasks, removeTasks }) => {
    console.log(tasks);
    return (
        <div className="task_list">
            {tasks.length === 0 ? (
                <p>No Task Yet</p>
            ) : (
                tasks.map((task, index) => {
                    return (
                        <p key={index} className="task">{task}
                            <button onClick={(e) => {removeTasks(index)}}>Delete</button>
                        </p>
                    )
                })
            )}
        </div>
    );
};

export default TaskList;