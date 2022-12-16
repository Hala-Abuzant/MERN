
import './App.css';
import Check from './components/Check';
import Task from './components/Task';
import React, { useState } from 'react'

function App() {
  const[todos,setTodos]=useState([]);

  const fun1=(todo)=>{

    setTodos([...todos,todo])
  }

  const deleteTask=(id)=>{

    setTodos(todos.filter((todo,i)=>id!=i))
    console.log(todos);
  }



  const updateTask=(id)=>{


  const toUpdate= todos.filter((todo,i)=>i==id);

  console.log(toUpdate[0]);
  // console.log(toUpdate[0].completed);

  toUpdate[0].completed=!toUpdate[0].completed;

  // console.log(toUpdate[0].completed);

  setTodos([...todos]);//??

  console.log(todos);

  }


  return (
    <div className="App">
      <Task  todos={todos} myfun={fun1}/>   {/* here  i lift todos */}
      <Check todos={todos} deleteTask={deleteTask} updateTask={updateTask}/>   {/* here i send them to check */}
    </div>
  );
}

export default App;
