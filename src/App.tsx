import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
  <div>
  <TodoList />  
</div>
  );
}
const TodoList = ()=> {
  return (
<div>
    <h3>What to learn</h3>
<div>
<input /><button>+</button>
</div>
  <ul>
    <li> <input type ='checkbox' checked = {true } /> <span> HTML&CSS </span> </li>
    <li> <input type ='checkbox' checked = {true } /> <span> JS </span> </li>
    <li> <input type ='checkbox' checked = {false } /> <span>React </span> </li>
  </ul>
  <div>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
  </div>
</div>
  );
}





export default App;
