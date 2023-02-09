import React from 'react';
import {ImCross} from 'react-icons/im'
import {AiOutlineCheck} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'

function TodoList({todo, setTodo, setEditTodo}) {

  const handleComplete = (todo) => {
    setTodo(prevTodos => 
      prevTodos.map(e => 
        e.id === todo.id
          ? {...e, completed : !e.completed}
          : e
      )
    );
  };

  const handleEdit = (id) => {
    const findTodo = todo.find((todo) => todo.id === id.id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({id}) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  }

  return (
    <div>
    {todo.map((todo) => {
      return(<li className='list-item' key={todo.id}>
         <input
         type='text'
         value={todo.title}
         className={`list ${todo.completed ? "complete" : ""}`}
         onChange={(event) => event.preventDefault()} 
         />
         <div>
          <button className='button-complete task-button'
          onClick={() => handleComplete(todo)}>
            <i><AiOutlineCheck /></i></button>
          <button className='button-edit task-button'
          onClick={() => handleEdit(todo)}>
            <i><FaEdit /></i></button>
          <button className='button-delete task-button'
          onClick={() => handleDelete(todo)}>
            <i><ImCross /></i></button>
         </div>
      </li>)
  })}
  </div>
  )
}

export default TodoList