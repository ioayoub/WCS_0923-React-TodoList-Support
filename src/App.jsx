import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <h1>My todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
