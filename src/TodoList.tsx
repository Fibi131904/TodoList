import { prependListener } from 'process';
import React from 'react';
import { isPropertySignature } from 'typescript';
import Task from './Task';
import TodolistHeader from './TodolistHeader';

type TodolistPropsType = {
  title: string
  tasks: Array<TaskType>
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean

}

const Todolist = (props: TodolistPropsType) => {
  return (
    <div className='App'>
      <div>
        <TodolistHeader title= {props.title}/>
        
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          <Task {...props.tasks[0]}/>
          <Task id= {props.tasks[1].id} title={props.tasks[1].title} isDone={props.tasks[1].isDone}/>
          <Task id= {props.tasks[2].id} title={props.tasks[2].title} isDone={props.tasks[2].isDone}/>
          
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
}
export default Todolist;