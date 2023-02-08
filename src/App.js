import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="container">
      <div><Header /></div>
      <div><Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} /> </div>
      <div>
      <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
