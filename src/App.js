import "./App.css";
import { useState,useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
 
  return (
    <div className="container">
      <div className="app-wrapper">
      <div><Header /></div>
      <div><Form 
      input={input} 
      setInput={setInput} 
      todo={todo} 
      setTodo={setTodo} 
      editTodo={editTodo} 
      setEditTodo={setEditTodo}/> </div>
      <div>
      <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo}/>
      </div>
      </div>
    </div>
  );
}

export default App;
