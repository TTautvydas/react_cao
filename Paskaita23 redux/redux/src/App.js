import { useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Todos from "./components/Counter/Todos/Todos";
import { useDispatch } from "react-redux";
import { getTodosAsync } from "./redux/todos/todosSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);

  return (
    <div>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
