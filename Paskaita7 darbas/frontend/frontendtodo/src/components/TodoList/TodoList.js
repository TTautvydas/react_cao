import React, { useState } from "react";
import axios from "axios";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  async function getToDos() {
    console.log("inside gettodos");
    try {
      const { data } = await axios.get("http://localhost:3000/todos");
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
      {<button onClick={getToDos}>Get Todos</button>}

      <Todo todo={todos} />
    </div>
  );
}
