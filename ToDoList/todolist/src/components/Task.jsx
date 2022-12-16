import React from 'react'
import { useState } from 'react'

const Task = (props) => {

    const[todo,setTodo]=useState({});

    const fun1=(e)=>{
        setTodo({
            
            text:e.target.value,
            completed: false,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.myfun(todo);//lefting
      
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        {/* when i put e */}

        <p>Task: <input type="text" onChange={fun1}/></p>
        {/* why we emited e from function  */}
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Task
