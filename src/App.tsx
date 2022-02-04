import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { TaskType } from './Todolist';


function App() {
  const tasks_1: Array<TaskType> = [
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'CSS', isDone: true },
    { id: 3, title: 'ReactL', isDone: false }
  ]
     const tasks_2: Array<TaskType> = [
      { id: 1, title: 'Kseniya', isDone: true },
      { id: 2, title: 'Yura', isDone: false },
      { id: 3, title: 'Petya', isDone: false }
    ]
    
      const tasks_3: Array<TaskType> = [
        { id: 1, title: 'Moscow', isDone: true },
        { id: 2, title: 'Kiev', isDone: false },
        { id: 3, title: 'Yekarerinburg', isDone: true }
      ]




      return (
        <div>
          <Todolist title={'What to learn?'} tasks={tasks_1} />
          <Todolist title={'What yor name?'} tasks={tasks_2} />
          <Todolist title={'What yor adress?'} tasks={tasks_3} />
        </div>
      );

    }



    export default App;



