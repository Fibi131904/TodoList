import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import { TaskType } from './Todolist';

export type FilterValuesType = 'all'|'active'|'completed'

function App() {

const [tasks, setTasks]= useState<Array<TaskType>>([
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'CSS', isDone: false },
    { id: 3, title: 'ReactL', isDone: true},
  ])
  // const tasks = resultArray[0] //state
  // const setTasks=resultArray[1] // setState
    
const removeTask = (taskID: number) => {
   const filteredTasks = tasks.filter(task => task.id !== taskID)
setTasks(filteredTasks)
}
const changeFilter= (filter:FilterValuesType)=> {
  setFilter(filter)
}

const [filter, setFilter] = useState<'all'|'active'|'completed'>('all')
const getFilteredTasksForRender = ()=> {
  switch(filter){
    case 'completed':
      return tasks.filter(t=>t.isDone===true)
      case 'active':
        return tasks.filter(t=>t.isDone===false)
        default: return tasks

  }
}
const filteredTasksForRender= getFilteredTasksForRender()
      return (
        <div className='App'>
          <Todolist
           title = {'What to learn?'}
           tasks={getFilteredTasksForRender()}
           removeTask={removeTask}
           changeFilter= {changeFilter}
            />
        </div>
      );

    }



    export default App;



