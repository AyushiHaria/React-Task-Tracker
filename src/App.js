//import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  //const name = 'Ayushi'

  const[showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
    {
      id : 1,
      text : 'Doctors Appointment',
      day : 'monday',
      reminder : true,
    },
    {
      id : 2,
      text : 'Meeting at school',
      day : 'tuesday',
      reminder : true,
    },
    {
      id : 3,
      text : 'Food Shopping',
      day : 'wednesday',
      reminder : true,
    },
    {
      id : 4,
      text : 'Party',
      day : 'thursday',
      reminder : true,
    }
  ])

  //Add Task
  const addTask =(task) =>{
    //console.log('task',task)

    const id = Math.floor(Math.random() * 10000) + 1

    //console.log(id)

    const newTask = {id, ...task }  //newTask is an object
    setTasks([...tasks, newTask])
  }


  //Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle Reminder
  // const toggleReminder = (id) => {
  //   //console.log(id);
  //   setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder } : task ))
  // }

  return (
    <div className="App">
      <Header title = "Task Tracker" onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? (
        <Tasks 
          key = {tasks.id} 
          tasks = {tasks} 
          onDelete={deleteTask} 
          //onToggle = {toggleReminder} 
        />
        )
        :(
          'No Tasks To Show'
        ) }
    </div>
    
  );
}

export default App;
