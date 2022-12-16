import React from 'react'

const Check = (props) => {
  return (
    <div>
      {props.todos.map((todo,id)=><p>{todo.text}<input type="checkbox" checked={todo.completed} onChange={e=>props.updateTask(id)}/> <button onClick={e=>props.deleteTask(id) }>Delete</button></p>)}
    </div>
  )
}

export default Check
