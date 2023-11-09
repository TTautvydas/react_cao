import "./App.css";
import Card from "./components/Counter/Card/Card";
import Counter from "./components/Counter/Counter";
import Image from "./components/Counter/Image/Image";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Counter startingNumber={9} />
      <Card />
    </div>
  );
}

export default App;
