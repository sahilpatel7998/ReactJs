import React from "react";
import { Task } from "./interface";
import    "./App.css";

interface Props{
    task: Task;
    completeTask(taskNameToDelete: string) :void
}

const TodoList = ({task, completeTask} :Props ) => {
    return(
        <div className ="task_output">
            <div className="jjj">
            <span>{task.newTask}</span>
            <span>{task.numbers}</span>
           
            <button onClick ={() =>{completeTask(task.newTask)}}>Delete</button>
            </div>
        </div>
    )
}

export default TodoList;