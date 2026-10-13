import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

function App() {
  const [task, setTask] = useState([]);
  
  const getTasks = () => {
    axios.get('http://localhost:3000/tasks')
    .then(({data}) => {setTask(data)})
    .catch((e) => console.log(e))
  }

  const deleteTask = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`)
    .then(() => getTasks())
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    getTasks();
  }, [])
  return (
    <>
      <CreateTask getTasks={getTasks} />
      <h1>Задачи</h1>
      <Tasks tasks={task} onDeleteTask={deleteTask} />
    </>
  )
}

export default App
