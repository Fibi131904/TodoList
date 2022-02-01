import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

const App = () => {
  return (
  <div>
  <TodoList title= 'What to learn' />  
  <TodoList title = 'Songs' />  
  <TodoList title = 'Books'/>  
</div>
  );
}
export default App;
