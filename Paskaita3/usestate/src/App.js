import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import { useState } from "react";

function App() {
  const [number, setnumber] = useState(0);
  return (
    <div>
      <Button text={"Add one"} onClick={() => setnumber((prev) => prev + 1)} />
      <Display number={number} />
      <Button
        text={"Subtract one"}
        onClick={() => setnumber((prev) => prev - 1)}
      />
    </div>
  );
}

export default App;
