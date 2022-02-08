import React from 'react';
import { TaskType } from './Todolist';

type TaskPropsType= TaskType & {
    removeTask: (taskID: number) => void 
}

function Task(props:TaskPropsType) {
    return (
        <li>
             <input type='checkbox' checked={props.isDone} />
             <span>{props.title}</span>
             <button onClick={() => {props.removeTask(props.id)}}>x</button>
      </li>
       
    );
}













export default Task;