import React, { useState } from "react";

const TaskInput = (props) => {
    let [inputTask, setInputTask] = useState("");
    

    return (
        <div>
            <h3>Enter Your Task</h3>
            <div className="input_field">
                <input type="text" name="task_input" placeholder="Task Please!!" value={inputTask} onChange={(e) => {setInputTask(e.target.value)}}/>
                <button onClick={() => {props.onAddTask(inputTask); setInputTask("")}}>Add Task</button>
            </div>
        </div>
    );
};

export default TaskInput;