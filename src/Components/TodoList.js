import React from 'react';
import './TodoList.css';

function TodoList({todo, setTodo}) {


  return (
    <div>
    {todo.map((todo) => {
      return(<li className='list-item' key={todo.id}>
         <input
         type='text'
         value={todo.title}
         className='list'
         onChange={(event) => event.preventDefault()} 
         />
      </li>)
  })}
  </div>
  )
}

export default TodoList