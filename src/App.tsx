import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

const App = () => {
  
const tasks1 = [
  {id: 1, title: 'HTML&CSS', isDone: true },
  {id: 2, title: 'JS', isDone: true },
  {id: 3, title: 'React', isDone: false },
  ]
const tasks2 = [
  {id: 1, title: 'Rep', isDone: true },
  {id: 2, title: 'O-o-o', isDone: true },
  {id: 3, title: 'Na-Na', isDone: false }
  ]
return (
<div>
  <TodoList title = 'What to learn' tasks = {tasks1}/>
  <TodoList title = 'Songs' tasks = {tasks2}/>
</div>
);
}



export default App;
