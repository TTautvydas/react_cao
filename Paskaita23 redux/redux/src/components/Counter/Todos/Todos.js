import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoAsync,
  deleteTodoAsync,
  updateTodosAsync,
} from "../../../redux/todos/todosSlice";

export default function Todos() {
  const [input, setInput] = useState("");
  const [showFinished, setShowFinished] = useState(false);

  const todos = useSelector((state) => state.todos.todos);

  const filteredTodos = useMemo(
    () => todos.filter((todo) => todo.completed === showFinished),
    [showFinished, todos]
  );

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      addTodoAsync({
        title: input,
      })
    );
    setInput("");
  }

  function handleDelete(id) {
    dispatch(deleteTodoAsync(id));
  }

  function handleChange(id, completed) {
    dispatch(updateTodosAsync({ id, completed }));
  }

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => setShowFinished((prev) => !prev)}>
        {showFinished ? "baigti" : "nebaigti"}
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => handleChange(todo.id, e.target.checked)}
            />
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
